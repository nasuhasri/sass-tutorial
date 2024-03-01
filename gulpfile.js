const { src, dest, watch, series } = require('gulp');
// invoke sass compiler and it will return a function
// sass - compile our sass file
const sass = require('gulp-sass')(require('sass'));

// compiling sass to css file and put it in css root folder
function buildStyles() {
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

// watch source sass file - auto run buildStyles() when we making changes
function watchTask() {
    watch(['index.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask);