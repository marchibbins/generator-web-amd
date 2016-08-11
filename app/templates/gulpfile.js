var gulp = require('gulp'),
    del = require('del'),
    minifyCSS = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

gulp.task('delete', function () {
    del(['dist/*']);
});

gulp.task('scripts', function () {
    return gulp.src('scripts/main.js')
        .pipe(plumber())
        .pipe(requirejsOptimize({
            include: ['almond', 'main']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('styles', function () {
  return gulp.src('styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'))
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('scripts/**/*.js', ['scripts']);
    gulp.watch('styles/**/*.scss', ['styles']);
});

gulp.task('default', ['delete', 'scripts', 'styles']);
