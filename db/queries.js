const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gamestoredb',
    password: 'P19680113t!@#$pg',
    port: 5432,
})
module.exports = pool;