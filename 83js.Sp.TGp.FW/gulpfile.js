//⋕js.Sp.TGp.FW.1
let {src, dest, series, watch} = require('gulp');
let concatFiles = require ('gulp-concat'); // для объединения в один файл
let minJS = require ('gulp-uglify') // для минимизации js
let delFl = require ('del');  // для очистки папки



 function taskDelJs (cb){
    return delFl('dist/*.js');
} 

function concJs (cb){
    return src('src/js/*.js')
        .pipe(concatFiles('bundle.js'))
        .pipe(dest('dist'));
}

function taskMinJs (cb) {
	return src('dist/bundle.js')
		.pipe(minJS())
		.pipe(dest('dist'));
} 


exports.default = function () {
    watch('src/js/*.js', series(taskDelJs, concJs, taskMinJs ));
};

