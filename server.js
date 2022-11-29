const express = require("express");
const db = require ('./config/db')
const app = express();

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
