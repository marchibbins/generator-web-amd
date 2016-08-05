var gulp = require('gulp'),
    del = require('del'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('delete', function () {
    del(['dist/*']);
});

gulp.task('scripts', function () {
    return gulp.src('scripts/main.js')
        .pipe(requirejsOptimize({
            include: ['almond', 'main']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('scripts/**/*.js', ['scripts']);
});

gulp.task('default', ['delete', 'scripts']);
