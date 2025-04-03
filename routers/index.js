const routerUser = require ("./userRouter")

module.exports =  (app) => {
  app.use (routerUser);
};