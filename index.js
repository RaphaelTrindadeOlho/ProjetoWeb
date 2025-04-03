const express = require ("express");
const app = express();
const port = 3000;
app.set ("view engine", "ejs");

const router = require ("./routers/index");

const conexao = require ("./models/conexao");
const tabelas = require ("./models/tabelas");

tabelas.init(conexao);

router (app);

app.listen(port ,(error) =>{
  if (error) {
    console.log ("Deu error");
    return; 
  }
  console.log("Servidor Rodando!");
});