const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Cannot be left blank, must have more than 2 characters.🤪"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [2, "Cannot be left blank, must have more than 2 characters.🤪"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minlength: [1, "Cannot be left blank, must have a price. 🤑"]
    }
}, { timestamps: true });

const Product = mongoose.model('Product', ProductsSchema);

module.exports = Product;