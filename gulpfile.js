/*global -$ */
'use strict';
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    imagemin = require('gulp-imagemin'),
    prefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css');

//Scripts Task
gulp.task('js', function(){
  gulp.src('js/custom/*.js')
  .pipe(plumber())
  .pipe(uglify())
  .pipe(gulp.dest('js'));
})

//Scripts Task
gulp.task('sass', function(){
  gulp.src('custom-sass/**/*.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(minifycss())
  .pipe(prefix('last 15 version'))
  .pipe(gulp.dest('css'));
})

//Image Task
gulp.task('images', function(){
  gulp.src('images/*')
  .pipe(imagemin())
})

//Watch Task
gulp.task('watch', function(){
  gulp.watch('js/custom/*.js', ['js']);
  gulp.watch('custom-sass/**/*.scss', ['sass']);
});

//Default Task
gulp.task('default', ['js', 'sass', 'watch']);