const express = require("express");
const db = require ('./config/db')
const app = express();
const livros = require ('./models/Livros')

db.on('error', console.log.bind('Erro ao conectar com o banco!'))
db.once('open',() =>{
console.log('Conexão realizada com sucesso!!')
})

const port = 5000;

app.get("/", (req, res) => {
  res.send("Servidor subiu!");
});

app.listen(port, () => {
  console.log(`Servidor rodando ${port}`);
});


app.get('/livros', (req,res)=>{
livros.find((error, livros)=>{
  res.status(200).json(livros)
})
})
//app.get('/livros/id',(req,res)=>{
//findById()
//})
