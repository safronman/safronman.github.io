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
  return gulp.src("scss/style.scss")                                              // take style.scss
    .pipe(sass({                                                                  // make style.css
        includePaths: require('node-normalize-scss').includePaths                 // add normalize.css
    }))                                                                           //
    .pipe(csscomb())                                                              // add csscomb
    .pipe(gulp.dest('css'))                                                       // put into css
    .pipe(browserSync.stream());
});
