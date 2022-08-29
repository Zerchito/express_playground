const { Sequelize } = require('sequelize');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PWD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PWD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true
});

module.exports = sequelize;
