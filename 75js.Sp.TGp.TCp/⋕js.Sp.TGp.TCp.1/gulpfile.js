//⋕js.Sp.TGp.TCp.1
const { series } = require('gulp');

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

/* function task (cb) {
    series( task1, task2, task3);
    console.log('task_main')
    cb();
} */

//exports.default = task;
exports.default = series(task1, task2, task3);
