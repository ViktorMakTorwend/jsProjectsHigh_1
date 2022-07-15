"use strict";

let form   = document.querySelector('form');
let a = document.querySelector('a');

a.addEventListener('click', function(event) {
	form.submit();
});

