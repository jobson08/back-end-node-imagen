'use strict'

const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');
const Post = require('../models/Post');
//rota main
routes.get('/', (req, res) => {
  return res.json({Sevidor: 'rodando'});
});

routes.post('/posts', multer(multerConfig ).single('file'), async (req, res) =>{
  const { originalname: name, size, key, url = ""} = req.file;
  
  const post = await Post.create({
    name,
    size,
    key,
    url
  });
    return res.json(post);
});


//Rotas
//router.use('/', require('./mensagem'));
//router.use('/', require('./imagens'));


module.exports = routes;