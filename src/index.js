'use strict'
const express = require('express');
const morgan = require('morgan');

const app = express();

//Sentings
const port = process.env.PORT || 4000;

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(require("./route/routes"));


//starta o sevidor
app.listen(port, () => console.log(`Sevidor na porta ${port}`));