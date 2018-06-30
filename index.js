'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3789;


mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://rpayan:Manantial777@38.135.39.214:20000/zoo', (err, res) => {
	mongoose.connect('mongodb://rpayan:Manantial777@localhost:20000/zoo', (err, res) => {

    if(err){
        throw err;
    }else {
        console.log('La conexion a la base de datos zoo se ha realizado correctamente..');

        app.listen(port, ()=>{
        	console.log('El Server express esta corriendo');
        })
    }

});


