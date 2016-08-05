var gulp = require('gulp'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

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

gulp.task('default', ['scripts']);
