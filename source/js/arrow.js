'use strict';

module.exports = function() {
	
	$(window).on('scroll', function(){
		arrowUp();
	});

	$(window).load(function() {
		arrowUp();
	});

	$('.arrow').on('click', function() {

		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	function arrowUp() {
		var 
			top = $(window).scrollTop(),
			arrow = $('.arrow'),
			duration = 500;
		
		if (top > 250) {
			
			arrow.fadeIn(duration);
		} else {
			arrow.fadeOut(duration);
		}
	};
};