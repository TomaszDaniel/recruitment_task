var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

/*SASS -> CSS */

gulp.task('sass', function () {
    return gulp.src('src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))

        .pipe(autoprefixer({
            browsers: ['last 4 version']
        }))

        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream())
});

/* Obserwator plików */

gulp.task('watch', function () {
    browserSync.init({
        server: "./src",
        notify: true,
        open: true
    });
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('./src/index.html', browserSync.reload);
});