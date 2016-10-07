'use strict';

module.exports = function() {

	$('#showMore2').on('click', function(e) {
		e.preventDefault();

		var _this = $(this),
			section = $('#section2'),
			btn = $('#showMore3');

		section.css('display', 'flex');
		_this.css('display', 'none');
		btn.css('display', 'block');
	});

	$('#showMore3').on('click', function(e) {
		e.preventDefault();

		var _this = $(this),
			section = $('#section3'),
			btn = $('#showMore4');

		section.css('display', 'flex');
		_this.css('display', 'none');
		btn.css('display', 'block');
	});

	$('#showMore4').on('click', function(e) {
		e.preventDefault();

		var _this = $(this),
			section = $('#section4');

		section.css('display', 'flex');
		_this.css('display', 'none');
	});

};