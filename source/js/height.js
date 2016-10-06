'use strict';

module.exports = function() {
	
	var 
		container = $('.main__container'),
		main = $('.main'),
		mainHeight;
	
	function isCurrent(page) {
    	return $(page).length;
  	};
  	

  	function containerH() {
  		if (isCurrent('#content__main')) {
  		
	  		mainHeight = main.height() + container.height() + 40 + 'px';
			main.css('height', mainHeight);
  		}
  	}

  	$(window).on('load', function(){
  		containerH();
  	})
	/* Перерасчет высоты карточки */

  	if (isCurrent('#card_present')) {

		$(window).load(function() {
			var card = $('.activeAdminSection'),
				container = $('.card__main');
				
			heightCount(card, container);
			containerHeight();
		})

		$('.card__menu-link').on('click', function() {
			
			var $this = $(this),
				cardUp = $this.closest('.card_present'),
				cards = cardUp.find('.card__main-inner'),  
				card = cards.filter(":not('.activeAdminSection')"),
				container = $('.card__main');
			
			heightCount(card, container);
			containerHeight();
		});

		function heightCount(card, container) {

			var cardHeight;

			cardHeight = card.height() + 20 + 'px';
			container.css('height', cardHeight);
		
		};

		/* Перерасчет высоты карточки */

		/* Перерасчет высоты контейнера карточки */

		function containerHeight() {
			var mainContainer = $('.main'),
				mainSection = $('.main__container'),
				mainContainerHeight;

			mainContainerHeight = mainSection.height() + 150 + 'px';

			mainContainer.css('height', mainContainerHeight);
		}

		/* Перерасчет высоты контейнера карточки */
		
  	};
};