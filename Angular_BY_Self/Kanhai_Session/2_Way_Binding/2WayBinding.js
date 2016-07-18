var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope){
	$scope.values = [4,5,6];
	$scope.changeValues = function(){
		$scope.values.push(5);
	}
	$scope.$watch('values', function(){
		console.log('called');
	});
});
app.directive('calculator', function(){
	return {
		restrict: 'EA',
		template: '<button ng-click="change()">Click From Directive</button> <ul><li ng-repeat="item in items">{{ item }}</li></ul>',
		scope: {
			items: '='
		},
		link: function(scope, element,attrs){
			scope.change = function(){
				scope.items = [1,2,3];
			};
		}
	}
});