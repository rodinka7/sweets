(function() {
  'use strict';

  var
  		slideText = require('./slideText'),
  		map = require('./map'),
      arrow = require('./arrow'),
      sned = require('./send'),
      sliderHeight = require('./sliderHeight'),
      sendPhone = require('./sendPhone'),
      mainController = require('./mainController.js');


  function isCurrent(page) {
    return $(page).length;
  };

  if (isCurrent('#contacts') || isCurrent('#shop')) {
		map();
  };
  
  slideText();

  arrow();

  sned();

  sliderHeight();

  sendPhone();

  mainController();
  
})();