'use strict';

module.exports = function() {
	$(window).on('resize', function(){
		changeHeight();
	});

	$(document).ready(function(){
		changeHeight();
	});

	$(window).on('load', function() {
		changeHeight();
	});

	function changeHeight() {
		var
			item = $('.slider__img-item'),
			slider = item.closest('.slider__img'),
			sliderCont = slider.closest('.slider'),
			height = item.height();

		slider.css({'height': height});
		sliderCont.css({'height': height});
	};
};