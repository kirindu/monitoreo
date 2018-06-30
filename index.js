'use strict'

var app = require('./app');
var port = process.env.PORT || 3789;


        app.listen(port, ()=>{
        	console.log('El Server express esta corriendo');
        });


