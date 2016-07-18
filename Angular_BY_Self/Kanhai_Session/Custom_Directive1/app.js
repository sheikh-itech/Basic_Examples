var app = angular.module('myApp', []);

app.controller('myCtrl',function($scope){
	$scope.names = ['a','b','c','aa','bb','cc','aaa','bbb','ccc'];
 
 });
app.directive('autocomplete', function(){
		return{
			restrict: 'EA',
			scope:{
				items: '='
			},
			template: '<div><input type="text" ng-model="search"/>'+
				'<ul><li ng-repeat="item in items | filter: search">{{item}}</li></ul></div>'		
		}	
	});
