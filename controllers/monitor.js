'use strict'

var si = require('systeminformation');

function infomem(req, res) {

si.mem()	
    .then(data => {
				    res.status(200).send({
					mem: data
			});
    })
    .catch(error => {

		    	res.status(500).send({
				message: 'Ocurrio un error al obtener la informacion'
			});

    });
	
}


function infotemp(req, res) {

si.cpuTemperature()	
    .then(data => {
				    res.status(200).send({
					temp: data
			});
    })
    .catch(error => {

		    	res.status(500).send({
				message: 'Ocurrio un error al obtener la informacion'
			});

    });
	
}

function infoload(req, res) {

si.currentLoad()	
    .then(data => {
				    res.status(200).send({
					load: data
			});
    })
    .catch(error => {

		    	res.status(500).send({
				message: 'Ocurrio un error al obtener la informacion'
			});
    });
	
}




function infonet(req, res) {

// Aqui podemos indicar la interfaz que queremos monitorear por ejemplo : si.networkStats('wlo1') 
si.networkStats()	
    .then(data => {
				    res.status(200).send({
					net: data
			});
    })
    .catch(error => {

		    	res.status(500).send({
				message: 'Ocurrio un error al obtener la informacion'
			});
    });
	
}


function infocpu(req, res) {

si.cpu()	
    .then(data => {
				    res.status(200).send({
					cpu: data
			});
    })
    .catch(error => {

		    	res.status(500).send({
				message: 'Ocurrio un error al obtener la informacion'
			});
    });
	
}



function infoprocesses(req, res) {

si.processes()	
    .then(data => {
				    res.status(200).send({
					processes: data
			});
    })
    .catch(error => {

		    	res.status(500).send({
				message: 'Ocurrio un error al obtener la informacion'
			});
    });
	
}

module.exports = {
	infomem,
	infotemp,
	infoload,
	infonet,
	infocpu,
	infoprocesses

}




