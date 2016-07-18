var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
	  .when('/',
      {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })
      .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      })
	  .when('/a', {
        templateUrl: "a.html"
      })
	 .otherwise({
        template: "This doesn't exist!--Try through server"
      })
});
app.controller('registerCtrl',function($scope){
     
     $scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {name: '', username: '',usertype: '',pass:'',contact:''}];
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	$scope.register = function() {
		$scope.todos.push({
			name: $scope.name,
			username: $scope.username,
			usertype:$scope.usertype,
			pass: $scope.pass,
			contact: $scope.contact
		});
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};

	$scope.login = function(){

	};
});