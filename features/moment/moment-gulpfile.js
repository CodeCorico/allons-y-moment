'use strict';

module.exports = function($gulp) {

  $gulp.task('moment', function(done) {

    $gulp.src([
      'node_modules/moment/moment.js',
      'node_modules/moment/min/moment.min.js',
      'node_modules/moment/min/moment-with-locales.js',
      'node_modules/moment/min/moment-with-locales.min.js'
    ])
      .pipe($gulp.dist('vendor'))
      .on('end', done);
  });

  return 'moment';
};
