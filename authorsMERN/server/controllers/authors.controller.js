const Author = require("../models/author.model")

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allDaAuthors) => {
            res.json({ Authors: allDaAuthors })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSingleAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(oneSingleAuthor => {
            res.json({ Author: oneSingleAuthor })
        })
        .catch((err) => { res.json(err) });
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.json(newlyCreatedAuthor)
        })
        .catch((err) => { res.status(400).json(err) });
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findByIdAndUpdate(
        req.params.id,
        req.body,
        // optional parameters
        { new: true, runValidators: true }
    )
        .then(updatedAuthor => {
            res.json({ Author: updatedAuthor })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
