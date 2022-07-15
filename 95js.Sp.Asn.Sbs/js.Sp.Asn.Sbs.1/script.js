"use strict";
//⋕js.Sp.Asn.Sbs.1

function func1(arr) {
	let pMess = document.querySelector('#message');
	pMess.textContent = 'data is got'
}

function func2(arr) {
	let ul = document.querySelector('ul');
	for (let el of arr){
		let li = document.createElement('li');
		li.textContent = el;
		ul.appendChild(li);
	}
}

function func3(arr) {
	let pAmm = document.querySelector('#amount');
	pAmm.textContent = 'length of arr: ' + arr.length;
}

function func4(arr) {
	let pRes = document.querySelector('#result');
	let sum = 0;
	for (let el of arr){
		sum += Number(el);
	}
	pRes.textContent = 'Sum of els: ' + sum;
}


setTimeout(function() {
	let arr = [1, 2, 3, 4, 5];
	func1(arr);
	func2(arr);
	func3(arr);
	func4(arr);
}, 3000 );



