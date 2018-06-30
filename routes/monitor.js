'use strict'

var express = require('express');
var MonitorController = require('../controllers/monitor');

var api = express.Router();

api.get('/obtener-memoria', MonitorController.infomem);
api.get('/obtener-temperatura', MonitorController.infotemp);
api.get('/obtener-carga', MonitorController.infoload);
api.get('/obtener-infored', MonitorController.infonet);
api.get('/obtener-infocpu', MonitorController.infocpu);
api.get('/obtener-infoprocesos', MonitorController.infoprocesses);


module.exports = api;

