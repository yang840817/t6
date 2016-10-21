var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('cssnext');
var precss = require('precss');
var postcssimport = require("postcss-import")

gulp.task('css', function () {
  var processors = [
 	cssnext,
  precss,
	postcssimport
  ];
  return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});
