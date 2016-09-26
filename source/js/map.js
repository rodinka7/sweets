'use strict';

module.exports = function () {
  var mapOptions = {
    // Приближение
    zoom: 13,
    // Координаты центра
    center: new google.maps.LatLng(50.949894, 28.648403),
    // Стили карты
    styles: [{"featureType": "administrative", "stylers": [{"visibility": "off"}]}, {
      "featureType": "poi",
      "stylers": [{"visibility": "simplified"}]
    }, {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{"visibility": "simplified"}]
    }, {"featureType": "water", "stylers": [{"visibility": "simplified"}]}, {
      "featureType": "transit",
      "stylers": [{"visibility": "simplified"}]
    }, {"featureType": "landscape", "stylers": [{"visibility": "simplified"}]}, {
      "featureType": "road.highway",
      "stylers": [{"visibility": "off"}]
    }, {"featureType": "road.local", "stylers": [{"visibility": "on"}]}, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{"visibility": "on"}]
    }, {"featureType": "water", "stylers": [{"color": "#abbaa4"}]}, {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [{"color": "#3f518c"}]
    }, {"featureType": "road.highway", "stylers": [{"color": "#ad9b8d"}]}],
    // Отключение стандартного интерфейса
    disableDefaultUI: true,
    // Отключение реакции на прокрутку колеса мыши
    scrollwheel: false
  };

  // Выбор элемента для карты
  var mapElement = document.getElementById('map_canvas');
  // Создание карты
  var map = new google.maps.Map(mapElement, mapOptions);
};