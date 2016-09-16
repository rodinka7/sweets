'use strict';

module.exports = function() {

	$(window).on('scroll', function(){

		var 
			top = $(window).scrollTop(),
			img = $('.slider__text');

		if (top > 200) {
			img.css('right', '10%');
		}
	});

	/* SLIDER */
	(function() {

		var flag = true,
			timer = 0,
			timerDuration = 2000;

		$('.slider__img').on('click', function() {

			var slides = $('.slider__img-item'),
				active = slides.filter('.active'),
				next = active.next(),
				first = slides.first(),
				duration = 1000;

			active.removeClass('active').fadeOut(duration, function() {
				
				next.addClass('inslide');
			});

			if (next.length === '') {
				first.fadeIn(100).addClass('active');
			} else {

				next.fadeIn(100).toggleClass('inslide active');
			}
		});
	})();
	/* SLIDER */

};