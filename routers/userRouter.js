// const Router = require ("express").Router;
const { Router } = require ('express');
const router = Router();
const UserController = require ("../controllers/UserController")
// Renderizando a pagina de users
router.get ('/userCadastro', (req, response) => {
  response.render ('userCadastro');
})

router.get ('/userListagem', (req, response) => {
  response.render ('userListagem')
});

router.get ('/user', (req, response) => {
  const resposta = UserController.buscar ();
  response.send(resposta);
});

router.post ('/user', (req, res) => {
  const resposta = UserController.criar ();
  res.send(resposta);
});

router.put ('/user/:id', (req, res) => {
  const { id } = req.params;
  const resposta = UserController.atualizar(id);
  res.send (resposta);
});

router.delete ('/user/:id', (req, res) => {
  const{ id } = req.params;
  const resposta = UserController.deletar(id);
  res.send (resposta);
});



// Renderizando a pagina de produtos
router.get ('/produto', (req, response) => {
  response.render ("produto")
});



module.exports = router;