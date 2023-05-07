const mysql = require("mysql2");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  dialectOptions: {
  socketPath: "/run/mysqld/mysqld.sock",
  },
  host: "localhost",
  port: 3306,
  username: "dbixanh",
  password: "0000",
  database: "dbixanh",
});

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

module.exports = {connection, sequelize};
