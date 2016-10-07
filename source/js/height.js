'use strict';

module.exports = function() {
	
	/*var 
		container = $('.main__container'),
		main = $('.main'),
		mainHeight;


  	function containerH() {
  		if (isCurrent('#content__main')) {
  		
	  		mainHeight = main.height() + container.height() + 40 + 'px';
			main.css('height', mainHeight);
  		}
  	}

  	$(window).on('load', function(){
  		containerH();
  	})*/

  	function isCurrent(page) {
    	return $(page).length;
  	};
  	
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