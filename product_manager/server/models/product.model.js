const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true,
    },
    punchline: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductsSchema);

module.exports = Product;