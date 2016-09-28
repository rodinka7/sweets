'use strict';

module.exports = function() {

	var tabItems = $('.card__menu-item'),
     tabs = $('.card__main-inner');

  function changeTab() {
    var hash = location.hash,
        activeTab = tabs.filter(hash),
        activeTabItem = tabItems.find('a').filter('[href="' + hash + '"]').parent();

    tabs.filter(':not(' + hash + ')').removeClass('activeAdminSection');

    if (activeTab.length) {
      activeTab.addClass('activeAdminSection');
      tabItems.removeClass('activeAdminItem');
      activeTabItem.addClass('activeAdminItem');
    } else {
      tabItems.eq(0).addClass('activeAdminItem');
      tabs.eq(0).addClass('activeAdminSection');
    }
  }

  $(window).on('hashchange', changeTab);
  $(changeTab);
};