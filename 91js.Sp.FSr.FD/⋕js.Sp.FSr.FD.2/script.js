"use strict";
//⋕js.Sp.FSr.FD.2

let form = document.querySelector('form');
let btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let formData = new FormData(form);
    formData.set('text4', '77');
    formData.delete('text1');
    console.log(Array.from(formData));
})


