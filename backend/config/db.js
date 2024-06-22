// backend/config/db.js

const { Pool } = require('pg');
//
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Nba_app',
  password: '1234',
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no banco de dados', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

module.exports = pool;
