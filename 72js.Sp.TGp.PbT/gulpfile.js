//⋕js.Sp.TGp.PbT
let gulp = require('gulp');

let date = new Date();

function task (cb) {
    console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    cb();
}

function taskCurentDay (cb) {
    console.log(date.getDay());
    cb();
}

function taskCurrentMonth (cb){
    console.log(date.getMonth());
}

function taskCurrentYear (cb) {
    console.log(date.getFullYear());
}

exports.task1 = taskCurentDay;
exports.task2 = taskCurrentMonth; 
exports.task3 = taskCurrentYear
exports.default = task;