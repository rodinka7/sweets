'use strict';

module.exports = function(){
	var myApp = angular.module('sweetsApp', ['ui.router']);
	
	myApp.factory('List', ['$http', function($http) {
	    return {
	      get: function() {
	        return $http.get('content.json').then(function(response) {
	          return response.data;
	        });
	      }
	    };
	  }]);

	myApp.config(function($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('index');
	    
	    $stateProvider.state('index', {
	      url: "/index",
	      templateUrl: "./mainTemplate.html",
	      controllers: ['contentController', 'authController']
	    })
	    .state('catalog', {
	      url: '/catalog',
	      templateUrl: "./catalogTemplate.html",
	      controller: 'contentController'
	    })
	    .state('about', {
	      url: '/about',
	      templateUrl: "./aboutTemplate.html"
	    })
	    .state('agreement', {
	      url: '/agreement',
	      templateUrl: "./agreementTemplate.html"
	    })
	    .state('assorty', {
	      url: '/assorty',
	      templateUrl: "./assortyTemplate.html"
	    })
	    .state('contacts', {
	      url: '/contacts',
	      templateUrl: "./contactsTemplate.html"
	    })
	    .state('news', {
	      url: '/news',
	      templateUrl: "./newsTemplate.html"
	    })
	    .state('news_1', {
	      url: '/news_1',
	      templateUrl: "./news1Template.html"
	    })
	    .state('news_2', {
	      url: '/news_2',
	      templateUrl: "./news2Template.html"
	    })
	    .state('news_3', {
	      url: '/news_3',
	      templateUrl: "./news3Template.html"
	    })
	    .state('pay', {
	      url: '/pay',
	      templateUrl: "./payTemplate.html"
	    })
	    .state('price', {
	      url: '/price',
	      templateUrl: "./priceTemplate.html"
	    })
	    .state('auth', {
	      url: '/auth',
	      templateUrl: "./authTemplate.html"
	    })
	    .state(':itemHref', {
	      url: '/:itemHref',	
	      templateUrl: "./cardTemplate.html",
	      controller: 'cardController'
	    })
	  });

	myApp.controller('cardController', ['List', '$stateParams', function(List, $stateParams){
			let cardList = this;

			List.get().then(function(data) {
			    let href = $stateParams.itemHref;

			    cardList.item = data.filter(function(item){
			    	return item.id === href;
			    });

			    cardList.toggle = true;

			    cardList.showInfo = function(e){
			    	e.preventDefault();
			    	cardList.toggle = true;
			    };
			    cardList.showConsist = function(e){
			    	e.preventDefault();
			    	cardList.toggle = false;
			    };
			    cardList.showPicture = function(){
			    	let uri = cardList.item[0].src,					
  						container = document.querySelector('.increasePicture'),
						elem = document.createElement('div');

					elem.className = 'increase__wrapper';

					elem.innerHTML = "<div class='increase__inner'><img class='increase__img' src='" + uri + "' /></div><div class='increase__close'><div class='increase__close-1'></div><span></span></div>";

					container.appendChild(elem);

					$('.increase__close').on('click', function(){			
						elem.remove();
					});
				};		    
		    });
		}]);

	myApp.controller('contentController', ['List', function(List){
		
		let cardContentList = this;

		List.get().then(function(data) {
		    cardContentList.list = data;
		    
			cardContentList.orderProp = 'weight';

			cardContentList.toggle = false;

			cardContentList.chooseStandart = function(e){
				e.preventDefault();
				cardContentList.toggle = true;
				
				cardContentList.standart = cardContentList.list.filter(function(item){
					return item.elit === false;
				})
			};

			cardContentList.chooseElit = function(e){
				e.preventDefault();
				cardContentList.toggle = false;
			};

			(function(){
				cardContentList.elit = cardContentList.list.filter(function(item){
					return item.elit === true;
				})
			})();
	    });
	}]);

	myApp.controller('authController', function(){
		let auth = this;
		
	})
}