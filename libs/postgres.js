const { Client } = require('pg');


const USER = encodeURIComponent(config.dbUser);
const PWD = encodeURIComponent(config.dbPassword);
const uri = `postgress://${USER}:${PWD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

async function getConnection() {
  const client  = new Client({ connectionString: uri });
  await client.connect();
  return client;
}

module.exports = getConnection;
