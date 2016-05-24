'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('prod', ['clean'], function(cb) {

  cb = cb || function() {};

  global.isProd = true;

  runSequence(['css', 'imagemin', 'browserify', 'copyFonts', 'copyIndex', 'copyIcons'], cb);

});
