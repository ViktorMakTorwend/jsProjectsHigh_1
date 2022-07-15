//⋕js.Sp.Asn.Sbs.9

import logic from './logic.js';

let btnCreateRem = document.querySelector('#btnCreateRem');
let btnDeleteRem = document.querySelector('#btnDeleteRem');
let inpText = document.querySelector('#inpText');
let inpTime = document.querySelector('#inpTime');


btnCreateRem.addEventListener('click', function (){
    logic.getNewTask(inpText.value, inpTime.value);
    inpText.value = '';
    inpTime.value = '';
});

btnDeleteRem.addEventListener('click', function (){
    logic.off(inpText.value);
})