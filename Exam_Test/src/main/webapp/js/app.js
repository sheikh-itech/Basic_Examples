var app = angular.module('examApp', ['ui.bootstrap','ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
	  .when('/register', {
        templateUrl: "templates/register.html",
		controller: 'examCtrl'
      })
      .when('/demo', {
        templateUrl: "templates/demo.html",
		controller: 'examCtrl'
      })
      .when('/login', {
        templateUrl: "templates/login.html",
		controller: 'examCtrl'
      })
	 .otherwise({
        template: "<p style='color:red;margin-left:25%;'><big>Welcome to library management system<big></p>"
      });
});

app.controller('examCtrl',['$scope', '$http','$location', function ($scope, $http, $location){

	
	$scope.path = function(path) {
	    
	     $location.path( path );
	 
	  };
	
	  $scope.demo = function() {
	  
		  $http({
              method : 'POST',
              url : 'http://localhost:8081/Exam_Test/webapi/demo',
              headers:{'Content-Type':'application/json'},
              data:$scope.demo
      }).success(function(data, status, headers, config) {
              //$scope.rflag = data;
              $scope.demo = {};
      }).error(function(data, status, headers, config) {
      	$scope.demo = data;
      }); 
	  };
    $scope.register = function() {
        $http({
                method : 'POST',
                url : 'http://localhost:8081/Exam_Test/webapi/register',
                headers:{'Content-Type':'application/json'},
                data:$scope.register
        }).success(function(data, status, headers, config) {
                //$scope.rflag = data;
                $scope.register = {};
        }).error(function(data, status, headers, config) {
        	$scope.register = data;
        }); 
    };
    
}]);
