'use strict';

module.exports = function() {
	
	function isCurrent(page) {
    	return $(page).length;
  	};

	/* Перерасчет высоты карточки */

  	if (isCurrent('#main-page')) {

		$(window).load(function() {
			var cards = $('.main__container'),
				card = cards.filter(".activeSection"),
				container = $('#main-page');
			
			heightCountPlease(card, container);
		})

		$('.menu__link').on('click', function() {
			
			var $this = $(this),
				cardUp = $this.closest('.content'),
				cards = cardUp.find('.main__container'),  
				card = cards.filter(":not('.activeSection')"),
				container = $('#main-page');
			
			heightCountPlease(card, container);
		});

		function heightCountPlease(card, container) {

			var cardHeight;

			cardHeight = card.height() + 770 + 'px';
			container.css('height', cardHeight);
		
		};

		/* Перерасчет высоты карточки */
		
  	};

  	/* Изменение высоты картинки в каталоге */
  		if (isCurrent('#catalog-page')) {
  			picHeight();
  		}

  		function picHeight() {
  			var pic = $('.card__pic-img_catalog');
  			  			
  			if (pic.height > (600 + 'px')) {
  				pic.css('height', '250px');
  			}
  		}
  	/* Изменение высоты картинки в каталоге */

};