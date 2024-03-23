const express = require('express');
const mysqlConnection = require('./BancoDados/Mysql/index.js');

const app = express();

app.get('/', function (req, res) {
 


return res.send( 'Hello World')
    




   
});

app.listen(3000, () => {
  console.log("Api Rodando");
});
