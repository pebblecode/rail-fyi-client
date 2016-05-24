'use strict';

import gulp         from 'gulp';
import postcss      from 'gulp-postcss';
import gulpif       from 'gulp-if';
import browserSync  from 'browser-sync';
import handleErrors from '../util/handle-errors';
import config       from '../config';


gulp.task('css', function () {
  return gulp.src(config.styles.src)
    .pipe(postcss([
      require('precss'),
      require('autoprefixer'),
      require('postcss-pxtorem')
    ]))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});
