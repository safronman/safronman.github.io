var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var csscomb = require('gulp-csscomb');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

  browserSync.init({
    server: "."
  });

  gulp.watch("scss/**/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('sass', function() {
  return gulp.src("scss/style.scss")
    .pipe(sass({
        includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(csscomb())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});
