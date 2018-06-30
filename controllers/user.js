'use strict'

//modulos
var bcrypt = require('bcrypt-nodejs');
var empty = require('is-empty');


//modelos
var User = require('../models/user');

//acciones
function prueba(req, res) {

	res.status(200).send({
		message: 'probando la accion prueba del controlador usuario'
	});

}

function getKeepers(req, res) {

	User.find({role:'ROLE_ADMIN'}).exec((err, users)=>{

		if(err){
			res.status(500).send({message: 'Error en la peticion'});
		}else {
			if(empty(users)){
				res.status(404).send({message: 'usuarios no encontrados'});		
			}else {
				res.status(200).send({users});						
			}
		}

	});

}


module.exports = {
	prueba,
	getKeepers
}