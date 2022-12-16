const livros = require("../models/Livros");

class LivroController {
  static findAll = (req, res) => {
    livros.find((err, livros) => {
      console.log("find", livros);
      res.status(200).json(livros);
    });
  };

  static getBookById = (req, res) => {
    const id = req.params.id;

    livros.findById(id, (err, livros) => {
      //tratar o erro ou o sucesso , baseado na função de callback utilizando os parametros err, livros
      if (err) {
        console.log("1");
        res
          .status(404)
          .send({ message: "Livro não encontrado", erro: err.message });
      } else {
        console.log("2");
        res.status(200).json(livros);
      }
    });
  };

  static createBook = (req, res) => {
    let livro = new livros(req.body);

    console.log("save", livro);

    livro.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: "Error ao salvar o livro", erro: err.message });
      } else {
        res.status(201).send(livro.toJSON());
      }
    });
  };
  static deleteBook = (req,res)=>{
    const id = req.params.id

    livros.findByIdAndDelete( id, (err)=>{
        if(err){
            res
          .status(404)
          .send({ message: "Não foi possivel deletar!Livro não encontrado", erro: err.message })
        }else{;
        res.status(200).json("Deletado");}
    })
  }
}

module.exports = LivroController;
