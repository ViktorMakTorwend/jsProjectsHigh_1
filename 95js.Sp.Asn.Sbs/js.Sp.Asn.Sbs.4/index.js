//⋕js.Sp.Asn.Sbs.4
// Чтобы разделить логику и обработку DOM элементов создал два .js файла, сборку произвожу в webpack, к html 
// подключен "dist/bundle.js".

import logic from './logic.js';

let btn = document.querySelector('button');

btn.addEventListener('click', function (){
    logic();
})