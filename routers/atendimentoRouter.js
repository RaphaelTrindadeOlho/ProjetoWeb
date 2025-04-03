// const Router = require ("express").Router;
const { Router } = require ('express');

const router = Router();

router.get ('/user', (req, response) => {
  response.render ("user")
});

router.post ('/atendimentos', (req, res) => {
  res.send ('Chegou aqui, estamos criando um novo atendimento');
});

router.put ('/atendimentos/id', (req, res) => {
  const { id } = req.params;
  res.send (`Chegou aqui estamos atualizando o antedimento ${id}...` );
});

router.delete ('/atendimentos/id', (req, res) => {
  const{ id } = req.params;
  res.send (`Chegou aqui, estamos deletendo o antedimento ${ id }`);
});

module.exports = router;