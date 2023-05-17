const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author is required"],
        minlength: [2, "Cannot be left blank, must have more than 2 characters.🤪"]
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorsSchema);

module.exports = Author;