"use strict";
//⋕js.Sp.Asn.Clb.1

function make(callback) {
	setTimeout(function() {
		let res = [1, 2, 3, 4, 5];
		callback(res); 
	}, 3000);
}

make(function(parArr) {
    let sum = 0;
	for (let el of parArr){
        sum +=el;
    }; 
    console.log(sum);
});

