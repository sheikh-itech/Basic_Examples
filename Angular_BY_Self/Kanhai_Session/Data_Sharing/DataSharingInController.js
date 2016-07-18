var app = angular.module('myApp', []);

app.controller('myCtrl1', function($scope, $rootScope){
	$scope.broadCastEvent = function(){
		$rootScope.$broadcast('button clicked');
	}
});
app.controller('myCtrl2', function($scope){
   $scope.isVisible=false;

	$scope.$on('button clicked',function(){
		$scope.isVisible=true;
	});	 
});