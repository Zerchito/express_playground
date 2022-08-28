const express = require('express');
const accountsRouter = require('./accounts.router');
const userRouter = require('./users.router');

function routerApi(app) {
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
  routerV1.use('/accounts', accountsRouter);
  routerV1.use('/users', userRouter);
}
module.exports = routerApi;
