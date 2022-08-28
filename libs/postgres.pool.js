const { Pool } = require('pg');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PWD = encodeURIComponent(config.dbPassword);
const uri = `postgress://${USER}:${PWD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


const pool  = new Pool({ connectionString: uri });

module.exports = pool;
