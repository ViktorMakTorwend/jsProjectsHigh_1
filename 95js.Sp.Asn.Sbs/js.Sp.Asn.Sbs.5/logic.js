"use strict";
//⋕js.Sp.Asn.Sbs.5

	let subsribers = {};

	// subscription of function
	on ('nextHour', function func1(curTime) {
		console.log("An new hour is started " + curTime);
	});

	on ('mealTime', function func2 (mealTime){
		console.log("It's time to meal " + mealTime);
	})

	on ('sleepTime', function func3 (sleepTime){
		console.log("It's time to sleep " + sleepTime);
	})


	function getNewHourTimer (){
		// init the timer
		let currentHour = new Date().getHours();
		setInterval(function() {  
			let nextHour = new Date().getHours();
			if(currentHour != nextHour){
				emit('nextHour', nextHour);
				currentHour = nextHour;
			}
		}, 1000);
	};

	function getDailyScheduleTimer (){
		// init the timer
		setInterval(function() {  
			let time = new Date();
			let currentTime = time.getHours() + '.' + time.getMinutes() + '.' + time.getSeconds();
				if (currentTime == '7.0.0' || currentTime == '12.0.0' || currentTime == '18.0.0'){
					emit('mealTime', currentTime);
				} 	
				if (currentTime == '21.0.0'){
					emit('sleepTime', currentTime);
				}
		}, 1000);
	};
	

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

	export default {getNewHourTimer, getDailyScheduleTimer};
	

