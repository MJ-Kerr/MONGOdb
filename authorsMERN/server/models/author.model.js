const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author is required"],
        minlength: [3, "Cannot be left blank, must have more than 3 characters.🤪"]
    }
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorsSchema);

module.exports = Author;