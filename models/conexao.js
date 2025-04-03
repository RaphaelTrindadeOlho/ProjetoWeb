require ('dotenv').config();
const mysql = require ("mysql2");

const conexao = mysql.createConnection ({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

conexao.connect ((err) => {
  if  (err) {
    console.log ("Erro ao conectar com banco", err);
  } else {
    console.log("Conectado ao MySQL com sucesso!");
  }
});

module.exports = conexao;