class UserController {
  buscar () {
    return "Buscando usuarios...";
  }

  criar () {
    return "Criando usuario... ";
  }

  atualizar (id) {
    return `Atulizando usuario ${id} ...`;
  }

  deletar (id) {
    return `Deletando usuario ${id} ...`
  }
}

module.exports = new UserController();