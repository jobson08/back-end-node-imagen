'use strict'
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose');
//DB config
const db = require('./config/key').mongoURI;
const cors = require ('cors');

const app = express();

//Sentings
const port = process.env.PORT || 4000;

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//DB conect
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB conectado...'))
  .catch(err => console.log(err)); 

//Routes
app.use(require("./route/routes"));


//starta o sevidor
app.listen(port, () => console.log(`Sevidor na porta ${port}`));