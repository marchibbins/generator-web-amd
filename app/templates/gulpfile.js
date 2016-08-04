var gulp = require('gulp'),
    requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('scripts', function () {
    return gulp.src('scripts/main.js')
        .pipe(requirejsOptimize({
            include: ['almond', 'main']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['scripts']);
