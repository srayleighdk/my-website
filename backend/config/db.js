const mysql = require("mysql");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 5000,
  username: "dbixanh",
  password: "0000",
  database: "dbixanh",
  socketPath: "/run/mysqld/mysqld.sock",
});

module.exports = sequelize;

const connection = mysql.createConnection({
  host: "localhost",
  user: "dbixanh",
  password: "0000",
  database: "dbixanh",
  socketPath: "/run/mysqld/mysqld.sock",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connectiong to database:", err);
    return;
  }
  console.log("Connected to database!");
});

module.exports = connection;
