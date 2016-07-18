var app = angular.module('ecommerceApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
	  .when('/', {
        templateUrl: "templates/demo.html",
		controller: 'myCtrl'
      })
      .when('/login', {
        templateUrl: "templates/demo.html",
		controller: 'myCtrl'
      })
	 .otherwise({
        template: "This doesn't exist!--Try through server"
      });
});

