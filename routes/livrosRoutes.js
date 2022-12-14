const express = require('express')
const LivroController = require('../controllers/LivrosControllers')

const routes = express.Router()

routes
  .get('/livros',LivroController.findAll)
  .post('/book', LivroController.createBook)
  .get('livro/:id',LivroController.findById)


module.exports = routes
