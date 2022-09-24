const Pool = require("pg").Pool;
const dotenv = require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "users",
  password: `${process.env.PSQL_PASSWORD}`, 
  port: 5432,
});

module.exports = pool;