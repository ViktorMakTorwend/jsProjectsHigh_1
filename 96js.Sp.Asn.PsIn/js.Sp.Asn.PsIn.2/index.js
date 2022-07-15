//⋕js.Sp.Asn.PsIn.2

let promise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		let res = 1 / getRandomInt(0, 5);
		
		if (res != 'Infinity'){
			resolve(res);
		} else {
			reject ('error, dividine on zero')
		}
		 
	}, 100);
});

promise.then (
	function (result) {
    	console.log(result);
	},
	function (error) {
		console.log(error)
	}
);

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}