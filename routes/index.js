const express = require('express');
const accountsRouter = require('./accounts.router');

function routerApi(app) {
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
  routerV1.use('/accounts', accountsRouter);
}

module.exports = routerApi;
