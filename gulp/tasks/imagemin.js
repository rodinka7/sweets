'use strict';

module.exports = function() {
	$.gulp.task('imagemin', () =>
	    gulp.src('./source/images/**/*.*')
	        .pipe($.imagemin())
	        .pipe(gulp.dest($.config.root + '/assets/img'))
	);
};