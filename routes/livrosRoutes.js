const express = require("express");
const LivroController = require("../controllers/LivrosControllers");

const routes = express.Router();

routes
  .get("/livros", LivroController.findAll)
  .post("/livro", LivroController.createBook)
  .get("/livro/:id", LivroController.getBookById)
  .delete("/livro/:id", LivroController.deleteBook)

module.exports = routes;
