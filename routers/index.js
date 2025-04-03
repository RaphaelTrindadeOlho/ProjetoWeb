const routerAntendimento = require ("./atendimentoRouter")

module.exports =  (app) => {
  app.use (routerAntendimento);
};