var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
	  .when('/', {
        templateUrl: "home.html",
		controller: 'mainCtrl'
      })
      .when('/home', {
        templateUrl: 'form.html',
        controller: 'mainCtrl'
      })	  
	  .when('/form',
      {
        templateUrl: 'form.html',
        controller: 'mainCtrl'
      })
	 .when('/form/:user',
      {
        templateUrl: 'form.html',
        controller: 'mainCtrl'
      })
	 .when('/update',
      {
        templateUrl: 'update.html',
        controller: 'mainCtrl'
      })
     .when('/show',
      {
        templateUrl: 'show.html',
        controller: 'mainCtrl'
      })
	 .otherwise({
        template: "This doesn't exist!--Try through server"
      })
});
app.controller("mainCtrl",['$scope', '$location','$routeParams',function($scope,$location,$routeParams) {
	$scope.master = [];
    $scope.varshow = true;

	$scope.go = function (path ) {
          $location.path( path );
    };
	$scope.update = function(path) {
		$scope.user = {
		 task: '',
		 priority: '',
		 status: '',
		 assignedBy: ''
		};
		//$scope.user = $routeParams.user;
		/*$scope.master.push($scope.user);*/
		alert($routeParams.user.task);
	    alert(master[0].task+'a');
		$location.path( path );
	}
	$scope.reset = function() {
       // Example with 2 arguments
       $scope.user = {};
	   
     };
	 $scope.Update = function(index) {
        
		$scope.updt = {
		 task: '',
		 priority: '',
		 status: '',
		 assignedBy: ''
		};
        $scope.updt=$scope.master[index];
	  
        //alert($scope.updt.task+"="+$scope.updt.priority+"="+$scope.updt.status+"="$scope.updt.assignBy);

	  }
}]);
app.controller("goCtrl",['$scope', '$location', function($scope,$location) {
	
}]);
