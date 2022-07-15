//⋕js.Sp.Asn.PsAr.1

function getPromis (){
	let promise = new Promise(function(resolve) {
		let timeDelay = getRandomInt(100, 1000);
		setTimeout(function() {
				resolve(timeDelay);
		}, timeDelay);
	});
	return promise;
}   

let promises = [];
for (let i = 0; i < 10; i++){
	process[i] = getPromis();
}

/* promise.then (
	function (result) {
		console.log(result);
	},
	function (error) {
		console.log(error)
	}
); */

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}