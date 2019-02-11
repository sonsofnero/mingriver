var gulp            = require('gulp');
var uglify          = require('gulp-uglify');
var watch           = require('gulp-watch');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var plumber         = require('gulp-plumber');
var sourcemaps      = require('gulp-sourcemaps');
var livereload      = require('gulp-livereload');

// File paths
var DIST_PATH = 'public/dist';
var SCRIPTS_PATH = 'public/assets/js/**/*.js';
var CSS_PATH    = 'public/assets/scss/**/*.scss';

// Styles
gulp.task('styles', function () {
  return gulp.src(CSS_PATH)
    .pipe(plumber(function (err) {
      console.log('There is an error dummy');
      console.log(err);
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Scripts
gulp.task('scripts', function () {
  return gulp.src(SCRIPTS_PATH)
    .pipe(plumber(function (err) {
      console.log('There is an error dummy');
      console.log(err);
      this.emit('end');
    }))
    .pipe(uglify())
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

// Images
gulp.task('images', function(){
  console.log('starting image task');
});

// HTML
gulp.task('html', function(){
    gulp.src('public/**/*.html')
    .pipe(livereload());
});

// PHP
gulp.task('php', function(){
    gulp.src('public/**/*.php')
    .pipe(livereload());
});

// Live Reload



// Watch
gulp.task('watch', function(){
  livereload.listen();
  gulp.watch(SCRIPTS_PATH, ['scripts']);
  gulp.watch(CSS_PATH, ['styles']);
  gulp.watch('public/**/*.html', ['html']);
  gulp.watch('public/**/*.php', ['php']);
});

// gulp.task('default', function() {
//   console.log('starting default task');
// });

gulp.task('default', ['styles', 'scripts', 'html', 'php', 'watch']);
