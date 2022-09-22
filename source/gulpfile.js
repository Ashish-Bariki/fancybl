const {src,dest,watch,series}=require('gulp');
const sass=require('gulp-sass')(require('sass'));

function buildStyle(){
    return src('../source/sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('../source/rawsass'))
}

function watchTask(){
    watch(['../source/sass/**/*.scss'],buildStyle)
}

exports.default=series(buildStyle,watchTask)