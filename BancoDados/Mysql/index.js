const mysql = require('mysql2');

const dotenv = require('dotenv');
dotenv.config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const port = process.env.DB_PORT;

const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port
  });

connection.connect(function(err) {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

module.exports = connection;
