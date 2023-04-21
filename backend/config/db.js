const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbixanh',
  password: '0000',
  database: 'dbixanh',
  socketPath: '/run/mysqld/mysqld.sock',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connectiong to database:', err);
    return;
  }
  console.log('Connected to database!');
})


module.exports = connection;
