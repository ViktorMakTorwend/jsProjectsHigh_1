//⋕js.Sp.Asn.PsAr.2

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
	promises[i] = getPromis();
}

console.log(promises);

Promise.race(promises).then (function(res) {
	console.log('first: ' + res);
})

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}