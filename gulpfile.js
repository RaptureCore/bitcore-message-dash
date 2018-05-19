'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-rapture');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
