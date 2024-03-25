const dotenv = require('dotenv');
dotenv.config();
const entidades = require('./BancoDados/KnexBase/index.js');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASEJP;
const port = process.env.DB_PORT;

const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: host,
      port: port,
      user: user,
      password: password,
      database: database,
    },
   
});



module.exports = knex;
