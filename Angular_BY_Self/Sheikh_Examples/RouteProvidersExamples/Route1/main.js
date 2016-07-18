var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
	  .when('/',
      {
        templateUrl: 'app.html',
        controller: 'AppCtrl'
      })
      .when('/pizza', {
        template: "Yum!!"
      })
	  .when('/a', {
        templateUrl: "a.html"
      })
	 .otherwise({
        template: "This doesn't exist!--Try through server"
      })
});

app.controller("AppCtrl", function($scope) {

    $scope.model = {
        message: "This is my app!!!"
    }
});