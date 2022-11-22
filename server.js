const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Servidor subiu!");
});

app.listen(port, () => {
  console.log(`Servidor rodando ${port}`);
});
