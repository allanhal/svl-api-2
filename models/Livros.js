const mongoose = require("mongoose");
//Criar o schema da collection do mongo
const LivrosSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  editora: { type: String, required: true },
  numeroPaginas: { type: Number },
  favorito: { type: Boolean },
});

//Se a collection não for criada , ele criará automatico no mongo/atlas

const livros = mongoose.model("livros", LivrosSchema);

module.exports = livros;
