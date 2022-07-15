//⋕js.Sp.Asn.Sbs.5
// Чтобы разделить логику и обработку DOM элементов создал два .js файла, сборку произвожу в webpack, к html 
// подключен "dist/bundle.js".

import logic from './logic.js';

let btnNewHour = document.querySelector('#newHour');
let btnMealTime = document.querySelector('#mealTime');

btnNewHour.addEventListener('click', function (){
    logic.getNewHourTimer();
});

btnMealTime.addEventListener('click', function (){
    logic.getDailyScheduleTimer();
});