"use strict";
//⋕js.Sp.Asn.Sbs.6

	let subsribers = {};

	// subscription of function
	on ('nextMin', function func1(curTime) {
		console.log("A new minute is started " + curTime);
	});


	+function getNewMinuteTimer (){
		// init the timer
		let currentMin = new Date().getMinutes();
		setInterval(function() {  
			let time = new Date();
			let nextMin = time.getMinutes();
			let hour = time.getHours();
			if(currentMin != nextMin){
				emit('nextMin', hour + ':' + nextMin);
				currentMin = nextMin;
			}
		}, 1000);
	}();

	
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

	

