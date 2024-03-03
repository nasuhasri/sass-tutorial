const { src, dest, watch, series } = require('gulp');
// invoke sass compiler and it will return a function
// sass - compile our sass file
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

// compiling sass to css file and put it in css root folder
function buildStyles() {
    return src('shinobi/**/*.scss')
        .pipe(sass())
        // look into html files and see what classes and rules do we actually use
        // look at our css files and take out any rules we dont use
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'))
}

// watch source sass file - auto run buildStyles() when we making changes
function watchTask() {
    watch(['shinobi/**/*.scss', '*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask);