const Product = require("./../models/product");

const productController = {
    async getProducts(req, res){
        const products = await Product.find({})
        res.send(products);
    },
    async getProductDetail(req, res){
        res.send('/WIP: get products detail')
    },
    async createProduct(req, res){
        res.send('/WIP: create product')
    },
    async updateProduct(req, res){
        res.send('/WIP: update product')
    },
    async deleteProduct(req, res){
        res.send('/WIP: delete product')
    },

}

module.exports = productController;