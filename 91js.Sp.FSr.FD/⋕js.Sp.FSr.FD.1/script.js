"use strict";
//⋕js.Sp.FSr.FD.1

let form = document.querySelector('form');
let btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let formData = new FormData(form);
    console.log(Array.from(formData));
})


