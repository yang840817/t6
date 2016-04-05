var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cssnext = require('cssnext');
var precss = require('precss');

//visible
var atFor = require('postcss-for');
var atVariables = require('postcss-at-rules-variables');

//concat
 var concat = require('gulp-concat');

//change model
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var will_change = require('postcss-will-change');

//import
var atImport = require('postcss-import');


gulp.task('styles', function() {
  var processors = [
    atFor,
    atVariables,
    cssnano,
    autoprefixer,
    cssnext,
    precss,
    will_change,
    color_rgba_fallback,
    opacity,
    pseudoelements,
    vmin,
    pixrem,
    atImport
  ];

// from:../style/styles.css
// to:../style/css
  return gulp.src('../postcss/*.css')
    .pipe(postcss(processors))
    .pipe(postcss([autoprefixer({
      browsers: ['last 2 versions']
    })]))
    .pipe(gulp.dest('../css/'))
});

gulp.task('concat', function() {
    return gulp.src('../css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('../build/'));
});


gulp.task('watch', function() {
  gulp.watch('../postcss/*.css', ['styles']);
    gulp.watch('../css/*.css', ['concat']);
});
