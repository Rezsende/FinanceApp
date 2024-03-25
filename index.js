const express = require('express');
const mysqlConnection = require('./BancoDados/Mysql/index.js');

const app = express();

app.get('/', function (req, res) {
 



    // const pdvCheckout = 'SELECT    pdv_checkout.* , pdv_sessao.* FROM pdv_checkout join pdv_sessao on pdv_checkout.id = pdv_sessao.idcheckout GROUP BY pdv_checkout.id ';
    const pdvCheckout = `
    SELECT pdv_checkout.*, pdv_sessao.*
    FROM pdv_checkout
    JOIN pdv_sessao ON pdv_checkout.id = pdv_sessao.idcheckout`;


    mysqlConnection.query(pdvCheckout, function(err, results){
     
       
        
        if (err) {
            console.error('Erro ao executar a consulta:', err);
            res.status(500).send('Erro ao processar a solicitação');
            return;
          }
          res.json(results);
    });
});

app.listen(3000, () => {
  console.log("Api Rodando");
});
