const { Pool } = require('pg');

const pool  = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'zerch',
  password: 'admin123',
  database: 'mi_chanchito'
});

module.exports = pool;
