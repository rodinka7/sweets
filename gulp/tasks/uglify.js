'use strict';

module.exports = function() {
	$.gulp.task('compress', (cb) => {
		$.pump([
	        $.gulp.src($.root + 'assets/js/app.js'),
	        $.uglify(),
	        gulp.dest($.root + 'assets/js')
	    ],
	    cb
	  );
	});
};