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
    res.send("/WIP: create product");
  },
  async updateProduct(req, res) {
    res.send("/WIP: update product");
  },
  async deleteProduct(req, res) {
    res.send("/WIP: delete product");
  },
};

module.exports = productController;
