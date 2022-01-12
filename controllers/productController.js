const { update } = require("./../models/product");
const Product = require("./../models/product");

const productController = {
  async getProducts(req, res) {
    const products = await Product.find({});
    res.send(products);
  },
  async getProductDetail(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (product) res.send(product);
      else {
        res.status(400);
        res.send("No product was found with that ID");
      }
    } catch (error) {
      res.status(400);
      res.send(error);
    }
  },
  async createProduct(req, res) {
    const p = new Product(req.body);

    p.save()
      .then((p) => {
        res.status(201);
        res.send(p);
      })
      .catch((e) => {
        res.status(400);
        res.send(e);
      });
  },
  async updateProduct(req, res) {
    const id = req.body._id;
    const newDocument = req.body;

    const options = {
      new: true,
      runValidators: true,
    };

    try {
      const updated = await Product.findByIdAndUpdate(id, newDocument, options);

      if (updated) res.send(updated);
      else {
        res.status(400);
        res.send("No product was found with that ID, so nothing was updated");
      }
    } catch (error) {
      res.status(400);
      res.send(error);
    }
  },
  async deleteProduct(req, res) {
    res.send("/WIP: delete product");
  },
};

module.exports = productController;
