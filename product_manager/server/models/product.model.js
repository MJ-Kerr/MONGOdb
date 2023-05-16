const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductsSchema);

module.exports = Product;