var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var serve = require('gulp-serve');
var cache = require('gulp-cached');
var eslint = require('gulp-eslint');
var source = require('vinyl-source-stream');

var source_ = 'src/**/*.js';

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
};

gulp.task('lint', function() {
  return gulp.src(source_)
    .pipe(cache('lint'))
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('build', function() {
  var bundler = browserify({
    entries: ['./src/scripts/app.js'],
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  });

  return bundler
    .bundle()
    .on('error', swallowError)
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('default', function() {
  gulp.watch(source_, ['lint', 'build']);
});