'use strict';

module.exports = function() {
  $.gulp.task('copy:file', function() {
    return $.gulp.src(['./source/template/**/**/*.php', './source/template/**/**/*.json'], { since: $.gulp.lastRun('copy:file') })
      .pipe($.gulp.dest($.config.root));
  });
};