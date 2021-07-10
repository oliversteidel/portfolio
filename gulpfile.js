const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();
const sassPartialsImported = require('gulp-sass-partials-imported');
const autoprefixer = require('gulp-autoprefixer');


let scss_dir = './src/scss/';
let includePaths = ['./src/scss/setup', './src/scss/components'];

function style() {
    // 1. where is my scss file
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sassPartialsImported(scss_dir, includePaths))

        // 2. pass that file through sass compiler
        .pipe(sass({ includePaths: scss_dir }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))

        // 3. where do I save the compiled CSS?
        .pipe(gulp.dest('./src/css'))
        // 4. stream changes to all browsers
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src',
            index: "index.html"
        }
    });
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/js/*.js').on('change', browserSync.reload);  
    
}


exports.style = style;
exports.watch = watch;
