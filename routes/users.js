var express = require('express');
var router = express.Router();
const demands = require('../models/demands');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/pragmapm';
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

let demand = [
  {
    "id" : 1,
    "Titulo do Pedido:": "Gabriel",
    "Especialidade:": "Programador",
    "Prazo de Entrega:": "08/04/2021",
    "Estimativa de Horas:": 500
  },
  {
    "id": 2,  
    "Titulo do Pedido:": "Gabriel",
    "Especialidade:": "Programador",
    "Prazo de Entrega:": "23/04/2021",
    "Estimativa de Horas:": 900
  }
];


/* GET users listing. */
router.route('/')
.get((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(demand);

})
.post((req, res, next) => {

  demands.create(req.body)
  .then((demand) => {
      console.log('demand criado ', demand);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(demand);
  }, (err) => next(err))
  .catch((err) => next(err));
/*
  let proxId = 1 + demand.map(p => p.id).reduce((x, y) => Math.max(x,y));
  let demand = {...req.body, id: proxId};
  demand.push(demand);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(demand);*/
})

router.route('/:id')
.delete((req, res, next) => {

  demand = demand.filter(function(value, index, arr){ 
    return value.id != req.params.id;
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.params.id);
})
.put((req, res, next) => {

  let index = demand.map(p => p.id).indexOf(req.params.id);
  demand.splice(index, 1, req.body);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json(req.body);
})


module.exports = router;