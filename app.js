'use strict'

var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');

var app = express();

app.use(cors());

//cargar rutas

var monitor_routes = require('./routes/monitor');

//middlewares de body.parser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//rutas base
app.use('/api', monitor_routes);



module.exports = app;
