const gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var del = require('del');


gulp.task('clean', () => {
	del.sync("dist");
});

gulp.task('build', ['html', 'css', 'js']);

gulp.task('js', () => {
	return browserify('src/pages/index.js')
         .transform(babelify)
         .bundle()
         .pipe(source('index.js'))
         .pipe(gulp.dest('dist'));
});

gulp.task('html', () => {
    return gulp.src('src/pages/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
    return gulp.src('src/pages/*.css')
        .pipe(gulp.dest('dist'));
});
