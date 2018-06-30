'use strict'

var app = require('./app');
//Aqui usamos el puerto 3789 pero pudo hacer sido otro
var port = process.env.PORT || 3789;


        app.listen(port, ()=>{
        	console.log('El Server express esta corriendo');
        });


