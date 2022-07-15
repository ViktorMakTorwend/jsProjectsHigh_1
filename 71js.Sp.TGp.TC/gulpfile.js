//⋕js.Sp.TGp.TC.1
let gulp = require('gulp');

function task (cb) {
    let date = new Date();
    console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
    cb();
}

exports.default = task;