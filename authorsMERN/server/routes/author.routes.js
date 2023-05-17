const AuthorController = require('../controllers/authors.controller');

module.exports = app => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneSingleAuthor);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.patch('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAnExistingAuthor);
}
