'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

api.get('/pruebas-del-controlador', UserController.prueba);
api.get('/obtener-keepers', UserController.getKeepers);

module.exports = api;