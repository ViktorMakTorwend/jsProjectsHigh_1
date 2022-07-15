"use strict";

let form   = document.querySelector('form');
let inpForm = form.querySelector('input');


form.addEventListener('submit', function(event) {
	let rEm = /^\w+@\w+\.[a-z]{2,3}$/.test(inpForm.value);
	if(rEm){
		form.submit();
	}
	else {
		event.preventDefault();
	}

});

