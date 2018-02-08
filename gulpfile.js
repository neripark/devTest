// import gulp from 'gulp';
// import babel from 'gulp-babel';
let gulp = require('gulp');
let webserver = require('gulp-webserver');
let babel = require('gulp-babel');

gulp.task('build', function(){
  gulp.src('./js/test.js')
  .pipe(babel())
  .pipe(gulp.dest('./dist/js'))
});

gulp.task('server', function(){
  gulp.src('./dist')
  .pipe(webserver({
    host: 'localhost',
    port: '9000',
    livereload: false
  }))
});

gulp.task('default', ['build','server']);