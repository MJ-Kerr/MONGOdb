const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    jokeText: {
        type: String,
        required: [true],
    },
    category: {
        type: String,
        required: [true],
    }
});

const Joke = mongoose.model('Joke', JokesSchema);

module.exports = Joke;
