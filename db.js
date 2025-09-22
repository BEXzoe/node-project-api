const mysql = require("mysql2/promise.js");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "express",
  password: "123456789",
});

module.exports = db;
