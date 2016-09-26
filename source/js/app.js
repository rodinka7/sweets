(function() {
  'use strict';

  var
  		slideText = require('./slideText'),
  		map = require('./map');


  function isCurrent(page) {
    return $(page).length;
  };

  if (isCurrent('#contacts')) {
		map();
  };
  
  slideText();

  
})();