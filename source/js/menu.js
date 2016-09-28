'use strict';

module.exports = function() {

	var tabItems = $('.menu__item'),
     tabs = $('.main__container'),
     links = $('.menu__link');

  function changeTab() {
    var hash = location.hash,
        activeTab = tabs.filter(hash),
        activeTabItem = tabItems.find('a').filter('[href="' + hash + '"]').parent(),
        activeLink = activeTabItem.find('.menu__link');

    console.log(activeLink);
    tabs.filter(':not(' + hash + ')').removeClass('activeSection');

    if (activeTab.length) {
      activeTab.addClass('activeSection');
      tabItems.removeClass('activeItem');
      activeTabItem.addClass('activeItem');
      links.removeClass('activeLink');
      activeLink.addClass('activeLink');
    } else {
      tabItems.eq(0).addClass('activeItem');
      tabs.eq(0).addClass('activeSection');
    }
  }

  $(window).on('hashchange', changeTab);
  $(changeTab);
};