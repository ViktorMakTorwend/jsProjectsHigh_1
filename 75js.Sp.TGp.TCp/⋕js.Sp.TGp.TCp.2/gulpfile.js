//⋕js.Sp.TGp.TCp.2
const { parallel } = require('gulp');

function task1 (cb) {
    console.log('task1');
    cb();
}

function task2 (cb){
    console.log('task2');
    cb();
}

function task3 (cb) {
    console.log('task3');
    cb();
}

exports.default = parallel(task1, task2, task3);
