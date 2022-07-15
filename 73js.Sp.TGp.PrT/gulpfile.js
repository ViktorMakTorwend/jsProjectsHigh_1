//⋕js.Sp.TGp.PrT.1
let gulp = require('gulp');

let date = new Date();

function task (cb) {
    taskCurentDay(cb);
    taskCurrentMonth(cb);
    taskCurrentYear(cb);
    cb();
}

function taskCurentDay (cb) {
    console.log(date.getDay());
    cb();
}

function taskCurrentMonth (cb){
    console.log(date.getMonth());
    cb();
}

function taskCurrentYear (cb) {
    console.log(date.getFullYear());
    cb();
}

exports.default = task;