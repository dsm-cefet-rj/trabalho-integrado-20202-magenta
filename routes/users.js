var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.json([
    {
      "Titulo do Pedido:": "Gabriel",
      "Especialidade:": "Programador",
      "Prazo de Entrega:": "08/04/2021",
      "Estimativa de Horas:": 500
    }
  ]);



});

module.exports = router;
