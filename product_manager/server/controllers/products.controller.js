const Product = require("../models/product.model")

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json({ Products: allDaProducts })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSingleProduct = (req, res) => {
    Product.findById(req.params.id)
        .then(oneSingleProduct => {
            res.json({ Product: oneSingleProduct })
        })
        .catch((err) => { res.json(err) });
}

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json(newlyCreatedProduct)
        })
        .catch((err) => { res.status(400).json(err) });
}

module.exports.updateExistingProduct = (req, res) => {
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        // optional parameters
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ Product: updatedProduct })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteAnExistingProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
