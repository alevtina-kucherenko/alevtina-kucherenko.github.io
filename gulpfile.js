const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('compile-less', function () {
    return gulp.src(['./projects/**/*.less', './style/styles.less'], {base: './'})
        .pipe(less())
        .pipe(gulp.dest('./'));
});

gulp.task('watch', ['compile-less'], function () {
    return gulp.watch(['./projects/**/*.less', './style/styles.less'], ['compile-less']);
});