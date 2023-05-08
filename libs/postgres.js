const { Client } = require('pg');

/**
 * This is an example of a direct connection to the data base
 * each time we use this we create a new connection.
 */
const USER = encodeURIComponent(config.dbUser);
const PWD = encodeURIComponent(config.dbPassword);
const uri = `postgres://${USER}:${PWD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

async function getConnection() {
  const client  = new Client({ connectionString: uri });
  await client.connect();
  return client;
}

module.exports = getConnection;
