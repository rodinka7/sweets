(function() {
  'use strict';

  var
  		slideText = require('./slideText'),
  		map = require('./map'),
      card_menu = require('./card_menu'),
      manu = require('./menu'),
      height = require('./height'),
      increase = require('./increase_pic'),
      arrow = require('./arrow'),
      sned = require('./send'),
      showMore = require('./showMore'),
      countH = require('./countH');


  function isCurrent(page) {
    return $(page).length;
  };

  if (isCurrent('#contacts') || isCurrent('#shop')) {
		map();
  };
  
  slideText();

  card_menu();
  
  manu();

  height();

  increase();

  arrow();

  sned();

  showMore(); 
  
})();