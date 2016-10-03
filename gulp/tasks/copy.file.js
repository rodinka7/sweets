'use strict';

module.exports = function() {
  $.gulp.task('copy:file', function() {
    return $.gulp.src('./source/template/**/**/*.php', { since: $.gulp.lastRun('copy:file') })
      .pipe($.gulp.dest($.config.root));
  });
};