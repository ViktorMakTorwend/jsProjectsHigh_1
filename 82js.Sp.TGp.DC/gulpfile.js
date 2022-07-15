//⋕js.Sp.TGp.DC.2
let {src, dest, series, parallel} = require('gulp');
let minCSS = require('gulp-clean-css'); // для минимизации CSS
let minJS = require ('gulp-uglify') // для минимизации js
let del = require ('del');  // для очистки папки


function taskDelCSS (cb){
    return del('dist/*.css');
}

function taskDelJs (cb){
    return del('dist/*.js');
}

function taskMinCSS (cb) {
    return src ('src/css/*.css')
        .pipe(minCSS())
        .pipe(dest('dist'));
}

function taskMinJs (cb) {
	return src('src/js/*.js')
		.pipe(minJS())
		.pipe(dest('dist'));
} 


exports.default = parallel(series(taskDelCSS, taskMinCSS), series(taskDelJs, taskMinJs));

