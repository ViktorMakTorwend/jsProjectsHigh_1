//⋕js.Sp.Asn.PsIn.1

let promise = new Promise(function(resolve) {
	setInterval(function() {
		resolve('text');
	}, 1000);
});

promise.then (function (result) {
    console.log(result);
})