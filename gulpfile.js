const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const touch = require('gulp-touch-cmd'); // Used to fix issue with CSS timestamps not reloading in Gulp 4

// Compile Sass
gulp.task('sass', function() {
  return gulp
    .src('sass/*.scss')
    .pipe(sourcemaps.init()) // initialize sourcemaps first
    .pipe(sass()) // compile SCSS to CSS
    .pipe(postcss([autoprefixer(), cssnano()])) // PostCSS plugins
    .pipe(sourcemaps.write('.')) // write sourcemaps file in current directory
    .pipe(gulp.dest('./docs/css'))
    .pipe(touch())
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

// Default task
gulp.task('default', gulp.series('sass'));

// Watch task
gulp.task('watch', function() {
  gulp.watch(['sass/*.scss'], gulp.parallel('sass'));
});
