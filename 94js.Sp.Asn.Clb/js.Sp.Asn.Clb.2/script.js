"use strict";
//⋕js.Sp.Asn.Clb.2

function make(numEl1, numEl2, callback) {
	setTimeout(function() {
		let arr = [1, 2, 3, 4, 5];

		let err;
		if (arr[numEl1] === undefined || arr[numEl2] === undefined){
			err = 'elem not exist';
		}
		else {
			err = null;
		}
		callback(arr[numEl1], arr[numEl2], err); 
	}, 3000);
}

make(2, 5, function(num1, num2, err) {
	if(!err) {
		console.log(num1 + num2); 
	}
	else {
		console.log(err);
	}
	
});