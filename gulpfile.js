var gulp = require('gulp');

var runSequence = require('run-sequence');
var del = require('del');
var savefile = require('gulp-savefile'); // For saving a stream back to disk
var filter = require('gulp-filter'); // For filtering files using globs
var order = require("gulp-order"); // For ordering the files in a stream
var concat = require('gulp-concat'); // For concatenating files together
var rename = require('gulp-rename'); // For renaming files
var babel = require('gulp-babel'); // Babel transpiler used for parsing JSX syntax
//var mainBowerFiles = require('main-bower-files'); // For accessing bower component files
var sass = require('gulp-sass'); // For precompiling CSS with SASS
var autoprefixer = require('gulp-autoprefixer'); // For autoprefixing CSS for cross-browser compatibility
var webpack = require('webpack-stream'); // For compiling js modules and dependencies into a single common JS file
var minifyCss = require('gulp-minify-css'); // For minifying CSS
var uglify = require('gulp-uglify'); // For minifying JS
var gls = require('gulp-live-server'); // Express server control for starting, reloading, etc.

// Define a set of reusable paths
var paths = {
  src: 'src/**/*', // All source files.
  serverJSFiles: ['src/*.js', '!src/config.sample.js'],
  wwwJSFiles: ['src/www/**/*.js'],
  styles: ['src/www/styles/**/*.scss'], // All less files in the styles directory
  dist: 'dist', // The target distribution directory for built files
  assets: 'dist/assets', // The target distribution assets directory
  targetJSFileName: 'app.min.js', // The target script filename
  targetCSSFileName: 'app.min.css', // The target stylesheet filename
  distContents: 'dist/**/*', // The contents of the target distribution directory
  server: 'dist/server.bundle.js', // Script for server
  reloadWorthy: ['dist/**/*'], // Any files that should trigger a reload of the server
  watchable: ['bower.json', 'src/**/*'] // Any files worth watching for rebuild
};

gulp.task('watch', function() {
  gulp.watch(paths.watchable, ['build']);
});

gulp.task('launch-server', function() {
  var server = gls.new(paths.server);
  server.start();

  // Use gulp.watch to trigger server actions(notify, start or stop)
  gulp.watch(paths.reloadWorthy, function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('clean', function() {
  return del(paths.distContents);
});

gulp.task('build-server', function (done) {
  return gulp.src(paths.serverJSFiles)
    // Babel is loaded by webpack to transpile the JSX AND ES6
    .pipe(webpack(require('./webpack-server.config.js'))) // Pack it up for browsers and server
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build-www-js', function (done) {
  return gulp.src(paths.wwwJSFiles)
    // Babel is loaded by webpack to transpile the JSX AND ES6
    .pipe(webpack(require('./webpack-www.config.js'))) // Pack it up for browsers and server
    .pipe(gulp.dest(paths.assets));
});

gulp.task('build-css', function (done) {
  // Concatenate and compile SASS files, then autoprefix them for browser compatibility and minify
  return gulp.src(paths.styles)
    .pipe(concat(paths.targetCSSFileName)) // Concatenate all of the files together
    .pipe(sass().on('error', sass.logError)) // Compile SASS
    /*.pipe(autoprefixer({  // Autoprefix
      browsers: ['last 2 versions'],
      cascade: false
    }))*/
    //.pipe(minifyCss({compatibility: 'ie8'})) // Minify
    .pipe(gulp.dest(paths.assets));
});

gulp.task('pack-js', function (done) {
  // Concatenate, transpile any jsx, and minify the javascript files
  return gulp.src(paths.assets + '/' + paths.targetJSFileName)
    .pipe(webpack())
    .pipe(uglify()) // Minify
    .pipe(rename(paths.targetJSFileName))
    .pipe(gulp.dest(paths.assets));
});

gulp.task('build', function(callback) {
  runSequence('clean', ['build-server', 'build-www-js', /*'build-web-js', */'build-css'], callback);
});

// Common tasks and default
gulp.task('serve', function(callback) {
  runSequence('build', 'launch-server', 'watch', callback);
});
gulp.task('default', ['serve']);
