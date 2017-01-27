'use strict';

module.exports = function() {
	$.gulp.task('default', () =>
	    gulp.src('./source/images/**/*.*')
	        .pipe(imagemin())
	        .pipe(gulp.dest($.config.root + '/assets/img'))
	);
};