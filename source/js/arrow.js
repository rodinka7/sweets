'use strict';

module.exports = function() {
	
	var call = $('.call'),
		form = $('#call'),
		close = $('.call__close');

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
			call = $('.call'),
			duration = 500;
		
		if (top > 250) {
			
			arrow.fadeIn(duration);
			call.fadeIn(duration);
		} else {
			arrow.fadeOut(duration);
			call.fadeOut(duration);
		}
	};


	call.on('click', function(e) {
		e.preventDefault();

		form.fadeIn(400);
	});

	close.on('click', function(e) {
		e.preventDefault();

		form.fadeOut(400);
	});
	
};