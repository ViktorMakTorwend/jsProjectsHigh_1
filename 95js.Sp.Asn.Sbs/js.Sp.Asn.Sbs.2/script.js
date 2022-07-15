"use strict";
//⋕js.Sp.Asn.Sbs.2
let subsribers = {};

on ('loaded', function func1(arr) {
	let pMess = document.querySelector('#message');
	pMess.textContent = 'data is got';
});

on ('loaded', function func2(arr) {
	let ul = document.querySelector('ul');
	for (let el of arr){
		let li = document.createElement('li');
		li.textContent = el;
		ul.appendChild(li);
	}
});

on ('loaded', function func3(arr) {
	let pAmm = document.querySelector('#amount');
	pAmm.textContent = 'length of arr: ' + arr.length;
});

on ('loaded', function func4(arr) {
	let pRes = document.querySelector('#result');
	let sum = 0;
	for (let el of arr){
		sum += Number(el);
	}
	pRes.textContent = 'Sum of els: ' + sum;
});

setTimeout(function() {
	emit('loaded', [1, 2, 3, 4, 5]);
}, 3000);


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

