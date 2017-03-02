'use strict';

module.exports = function(){
	var myApp = angular.module('sweetsApp', ['ui.router']);
	
	myApp.factory('List', ['$http', function($http) {
	    return {
	      get: function() {
	        return $http.get('content.json').then(function(response) {
	          return response.data;
	        });
	      },
	      post: function(data){
	      	return $http.post('writePost.php', data).then(function(response) {
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
	      controllers: ['contentController']
	    })
	    .state('catalog', {
	      url: '/catalog',
	      templateUrl: "./catalogTemplate.html",
	      controller: 'contentController'
	    })
	    .state('about', {
	      url: '/about',
	      templateUrl: "./aboutTemplate.html",
	      controller: 'contentController'
	    })
	    .state('agreement', {
	      url: '/agreement',
	      templateUrl: "./agreementTemplate.html",
	      controller: 'contentController'
	    })
	    .state('assorty', {
	      url: '/assorty',
	      templateUrl: "./assortyTemplate.html",
	      controller: 'contentController'
	    })
	    .state('contacts', {
	      url: '/contacts',
	      templateUrl: "./contactsTemplate.html",
	      controller: 'contentController'
	    })
	    .state('news', {
	      url: '/news',
	      templateUrl: "./newsTemplate.html",
	      controller: 'contentController'
	    })
	    .state('news_1', {
	      url: '/news_1',
	      templateUrl: "./news1Template.html",
	      controller: 'contentController'
	    })
	    .state('news_2', {
	      url: '/news_2',
	      templateUrl: "./news2Template.html",
	      controller: 'contentController'
	    })
	    .state('news_3', {
	      url: '/news_3',
	      templateUrl: "./news3Template.html",
	      controller: 'contentController'
	    })
	    .state('pay', {
	      url: '/pay',
	      templateUrl: "./payTemplate.html",
	      controller: 'contentController'
	    })
	    .state('price', {
	      url: '/price',
	      templateUrl: "./priceTemplate.html",
	      controller: 'contentController'
	    })
	    .state('auth', {
	      url: '/auth',
	      templateUrl: "./authTemplate.html",
	      controller: 'authController'
	    })
	    .state('changeGoods', {
	      url: '/changeGoods',
	      templateUrl: "./changeTemplate.html",
	      controllers: ['contentController']
	    })
	    .state('addItem', {
	      url: '/addItem',
	      templateUrl: "./addTemplate.html",
	      controllers: ['cardController', 'contentController']
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

	myApp.controller('contentController', ['List', '$http', function(List, $http){
		
		let contentList = this;

		List.get().then(function(data) {
		    contentList.list = data;
		    
			contentList.orderProp = 'weight';

			contentList.toggle = false;

			contentList.chooseStandart = function(e){
				e.preventDefault();
				contentList.toggle = true;
				
				contentList.standart = contentList.list.filter(function(item){
					return item.elit === false;
				})
			};

			contentList.chooseElit = function(e){
				e.preventDefault();
				contentList.toggle = false;
			};

			(function(){
				contentList.elit = contentList.list.filter(function(item){
					return item.elit === true;
				})
			})();
	    });

	    contentList.removeItem = function(e){
			e.preventDefault();
			let answer = confirm('Вы уверены, что хотите удалить товар?'),
				href;
			
			if (answer){
				href = e.toElement.hash;
				
				contentList.list = contentList.list.filter(function(item){
					return item.href !== href; 
				});

				List.post(JSON.stringify(contentList.list)).then(function(response) {
					console.log('Данные отправлены на сервер!');
		        });
			}
		}
	}]);

	myApp.controller('authController', function(){
		let auth = this,
			form = document.querySelector('.auth__card-form'),
			footer = document.querySelector('.auth__card-footer'),
			div;

		auth.logIn = function(e){
			if ((auth.login !== 'admin') && (auth.password !== 'OliaChertkova')){
				e.preventDefault();
				form.reset();
				div = document.createElement('div');
				div.className = 'auth__error';
				div.textContent = 'Логин или пароль заполнены неверно!';

				form.insertBefore(div, footer);
			}
		};
		
	});
};