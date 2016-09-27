'use strict';

module.exports = function() {

	$(window).on('scroll', function(){

		var 
			top = $(window).scrollTop(),
			img = $('.slider__text');

		if (top > 200) {
			img.css('right', '1%');
		}
	});

	/* SLIDER */
	var slider = (function() {
		
		var flag = true,
			timer = 0,
			timerDuration = 4000;

		return {
			init: function() {

				var _this = this;

				/* Включаем автопереключение */
				_this.autoSwitch();

			},

			moveSlide: function(slide) {

				var 
					container = slide.closest('.slider'),
					slides = container.find('.slider__img-item'),
					activeSlide = slides.filter('.active'),
					slideWidth = slides.width(),
					duration = 1000,
					reqPos = 0,
					reqSlideStrafe = 0;
				
				if (flag) {

					flag = false;
					
					slide.css('left', reqPos).addClass('inslide');

					var movableSlide = slides.filter('.inslide');

					activeSlide.animate({
						left: reqSlideStrafe,
						opacity: 0
					}, duration);
					movableSlide.animate({
						left: 0,
						opacity: 1
					}, duration, function() {
						
						var $this = $(this);
						slides.css({'left': '0'}).removeClass('active');
						$this.toggleClass('inslide active');
						flag = true;
					});
				}
				
			},

			autoSwitch: function() {
				
				var _this = this;

				timer = setInterval(function() {
					
					var
						slides = $('.slider__img-item'),
						activeSlide = slides.filter('.active'),
						nextSlide = activeSlide.next(),
						firstSlide = slides.first();

					if (nextSlide.length) {
						_this.moveSlide(nextSlide);
					} else {
						_this.moveSlide(firstSlide);
					}

				}, timerDuration);
			},

			clearTimer: function() {
				if (timer) {
					clearInterval(timer);
					this.autoSwitch();
				}
			}
		}

	})();

	$(document).ready(function() {
		if ($('.slider').length) {
			slider.init();
		}
	})
	/* SLIDER */

};