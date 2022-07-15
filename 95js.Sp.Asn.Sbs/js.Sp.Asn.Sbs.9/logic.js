"use strict";
//⋕js.Sp.Asn.Sbs.9

let subsribers = {};

function getNewTask (task, time){

	on (task, function task(data) {
		alert ("It's time for " + data)
	});

	setInterval(function() {  
		let date = new Date();
		let curTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
		if(time == curTime){
			emit(task, task + ' ' + curTime );
		}
	}, 1000);	
};
	
function on (name, callback) {
	if (!subsribers[name]) {
		subsribers[name] = [];
	}
	subsribers[name].push(callback);
	console.log(subsribers);
}

function emit(name, data) {
	if (subsribers[name]) {
		for (let callback of subsribers[name]) {
			callback(data);
		}
	}
}

function off (name){
 	if (subsribers[name]) {
		delete subsribers[name];
	} 
}
export default {getNewTask, off};
	

