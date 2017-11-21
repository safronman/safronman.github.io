var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('style', function () {
  return gulp.src('sass/style.scss')
    .pipe(sass.sync())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());

});

gulp.task('serve', ['style'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("sass/**/*.scss", ['style']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
