
// PostgreSQL connection using node-postgres (pg)

const { Pool } = require('pg');

// Update these values with your PostgreSQL config
const pool = new Pool({
    user: 'postgres',      // DB username
    host: 'localhost', // DB host
    database: 'SchoolCoreAPI', // DB name
    password: 'postgres', // DB password
    port: 5432,
});

pool.on('connect', () => {
  console.log('Connected to Postgres database');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;




