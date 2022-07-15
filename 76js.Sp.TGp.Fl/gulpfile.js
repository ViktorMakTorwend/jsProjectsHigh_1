//⋕js.Sp.TGp.Fl.1
let {src, dest} = require('gulp');

function task1 (cb) {
   return src('src/style1.css')
    .pipe(dest('dist'));
}

function task2 (cb){
    return src('src/style2.css')
    .pipe(dest('dist'));
}

function task3 (cb) {
    return src('src/style3.css')
    .pipe(dest('dist'));
}

exports.task1 = task1;
exports.task2 = task2;
exports.task3 = task3;
