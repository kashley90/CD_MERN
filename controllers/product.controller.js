const Product = require("../models/product.model");
module.exports = {
    getDisplay: (req, res) => {
        Product.find({})
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },

    getProduct: (req, res) => {
        Product.findOne({ _id:req.params.id})
            .then((Product) => res.json(Product))
            .catch((err) => console.log(err));
    },

    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err));
    }
};