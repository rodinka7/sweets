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
      paginator = require('./paginator');


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

  increase();

  arrow();

  sned();

  paginator();
  
})();