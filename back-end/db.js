const Pool = require('pg').Pool;

const pool = new Pool ({
    user : 'postgres',
    password : 'edmond9755',
    host : 'localhost',
    port : '5432',
    database : 'gestion_budget'
});

module.exports = pool;