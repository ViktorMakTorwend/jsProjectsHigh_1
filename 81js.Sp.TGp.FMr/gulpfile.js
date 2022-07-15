//⋕js.Sp.TGp.DC.1
let {src, dest, series} = require('gulp');
let cleanCSS = require ('gulp-clean-css');
let del = require ('del');

function taskDel (cb) {
   return del('dist')
};

function taskCss(cb){
    return src('src/*.css')
        .pipe(cleanCSS())
        .pipe(dest('dist'));
}


exports.default = series(taskDel, taskCss);

