'use strict';

import gulp from 'gulp';
import awspublish from 'gulp-awspublish';

gulp.task('deploy', ['prod'], function() {

  const publisher = awspublish.create({
    region: 'eu-west-1',
    accessKeyId: 'AKIAJPDFE2Z4BFX2WCIQ',
    secretAccessKey: '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',
    params: {
      Bucket: 'rail-fyi'
    }
  }, {
    cacheFile: '../../temp/'
  });

  return gulp.src('./build/**/*.*')
     // gzip, Set Content-Encoding headers and add .gz extension
    // .pipe(awspublish.gzip({ ext: '.gz' }))

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish())

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

     // print upload updates to console
    .pipe(awspublish.reporter());

});
