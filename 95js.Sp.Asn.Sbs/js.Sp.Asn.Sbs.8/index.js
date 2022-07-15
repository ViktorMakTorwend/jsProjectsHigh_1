//⋕js.Sp.Asn.Sbs.8

import logic from './logic.js';

let btn = document.querySelector('button');
let inpText = document.querySelector('#inpText');
let inpTime = document.querySelector('#inpTime');


btn.addEventListener('click', function (){
    logic.getNewTask(inpText.value, inpTime.value);
})