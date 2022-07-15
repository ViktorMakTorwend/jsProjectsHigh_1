//⋕js.Sp.TGp.FMn.1
let {src, dest} = require('gulp');
const GulpUglify = require('gulp-uglify');

function task (cb) {
   return src('src/*.js')
    .pipe(GulpUglify())
    .pipe(dest('dist'));
};

exports.default = task;

