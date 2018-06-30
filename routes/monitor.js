'use strict'

var express = require('express');
var MonitorController = require('../controllers/monitor');

var api = express.Router();

api.get('/get-mem', MonitorController.infomem);
api.get('/get-temp', MonitorController.infotemp);
api.get('/get-load', MonitorController.infoload);
api.get('/get-net', MonitorController.infonet);
api.get('/get-cpu', MonitorController.infocpu);
api.get('/get-process', MonitorController.infoprocesses);


module.exports = api;

