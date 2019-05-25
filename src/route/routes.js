'use strict'

const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');

//rota main
routes.get('/', (req, res) => {
  return res.json({Sevidor: 'rodando'});
});

routes.post('/posts', multer(multerConfig ).single('file'), (req, res) =>{
  console.log(req.file);
  
    return res.json({ helo: "Jobson"});
});


//Rotas
//router.use('/', require('./mensagem'));
//router.use('/', require('./imagens'));


module.exports = routes;