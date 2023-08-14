const pool = require('./queries');
const { rebuildDB, testDB } = require('./seedData');

rebuildDB()
  .catch(console.error)
  .finally(() => pool.end());
