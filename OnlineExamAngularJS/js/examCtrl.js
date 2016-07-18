var app = angular.module('myApp', ['ngRoute']);

      app.controller('examCtrl', function ($scope, $http){
		  $scope.step = 0;
		  $scope.position = [0,1,2,3];
		  $scope.option = [];
        $http.get('data/javascript.json').success(function(data) {
          $scope.records = data;
    
        });
		$scope.next = function(){
			if($scope.step<9){
				$scope.step = $scope.step+1;//location.reload();
			}
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
      