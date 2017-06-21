const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const del = require('del');


gulp.task('clean', () => {
	del.sync("dist");
});

gulp.task('build', ['libs', 'html', 'css', 'js']);

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

gulp.task('libs', () => {
    return gulp.src('libs/*')
        .pipe(gulp.dest('dist/libs'));
});
