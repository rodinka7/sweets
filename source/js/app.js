(function() {
  'use strict';

  var
  		slideText = require('./slideText'),
  		map = require('./map'),
      card_menu = require('./card_menu'),
      manu = require('./menu'),
      height = require('./height');


  function isCurrent(page) {
    return $(page).length;
  };

  if (isCurrent('#contacts')) {
		map();
  };
  
  slideText();

  card_menu();
  
  manu();

  height();

  /* Подключение Fancybox */
  $(document).ready(function() {
    $('.gallery').fancybox();
  });
  
})();