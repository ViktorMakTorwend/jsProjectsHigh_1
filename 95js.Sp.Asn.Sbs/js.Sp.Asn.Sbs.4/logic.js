"use strict";
//⋕js.Sp.Asn.Sbs.4

export default function() {

	let subsribers = {};

	// subscription of function
	on ('nextHour', function func1(curTime) {
		console.log("An new hour is started " + curTime);
	});


	// init the timer
	let currentHour = new Date().getHours();

	setInterval(function() {  
		let nextHour = new Date().getHours();
		if(currentHour != nextHour){
			emit('nextHour', nextHour);
			currentHour = nextHour;
		}
	}, 1000);

	function on (name, callback) {
		if (!subsribers[name]) {
			subsribers[name] = [];
		}

		subsribers[name].push(callback);
	}

	function emit(name, data) {
		if (subsribers[name]) {
			for (let callback of subsribers[name]) {
				callback(data);
			}
		}
	}
};


