'use strict';

module.exports = function() {
	$('#increase').on('click', function(){
		var 
			elem = document.createElement('div'),
			card = $(this).closest('.card__pic_present'),
			img = card.find('.card__pic-img_present'),
			uri = img.attr('src'),
			container = $('#insert');

		elem.className = 'increase__wrapper';

		elem.innerHTML = "<div class='increase__inner'><img class='increase__img' src='" + uri + "' /></div><div class='increase__close' id='close'><div class='increase__close-1'></div><span></span></div>";

		container.append(elem);
		
		$('#close').on('click', function(){			
			elem.remove();
		});
	});
};