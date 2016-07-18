var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
	  .when('/',
      {
        templateUrl: 'temp.html',
        controller: 'examCtrl'
      })
	 .otherwise({
        template: "This doesn't exist!--Try through server"
      })
});
app.controller('examCtrl', function ($scope, $http){
		  $scope.step = 0;
		  $scope.position = [0,1,2,3];
		  $scope.option = [];
        $http.get('javascript.json').success(function(data) {
          $scope.records = data;
    
        });
		$scope.next = function(){
			if($scope.step<9){
				$scope.step = $scope.step+1;
			}alert($scope.val);
		}
		$scope.prev = function(){
			if($scope.step>0){
				$scope.step = $scope.step-1;
			}
		}
		$scope.result = function(val){
			alert(val);
		}
      });
      