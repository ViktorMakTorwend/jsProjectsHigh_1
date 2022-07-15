"use strict";
//⋕js.Sp.FSr.FD.3

let form = document.querySelector('form');
let btn = document.querySelector('button');

btn.addEventListener('click', function (){
    let formData = new FormData(form);
    for (let value of formData.values()){
        console.log(value);
    }
});


