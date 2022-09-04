const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PWD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PWD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;