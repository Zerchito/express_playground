const { Client } = require('pg');

async function getConnection() {
  const client  = new Client({
    host: 'localhost',
    port: 5432,
    user: 'zerch',
    password: 'admin123',
    database: 'mi_chanchito'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
