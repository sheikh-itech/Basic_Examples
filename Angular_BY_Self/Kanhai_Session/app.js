var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
	$scope.value1 = 'aaaaaa';
});
app.directive('myDirective', function(){
  return{    
    restrict: 'EA',
    template: '<div> Hello world {{user}}</div>',	
    replace: true,
    link: function(scope, element, attrs){
		scope.user = 'sheikh1234569';
	}
}});

var app1 = angular.module('myApp1', []);
app1.controller('myCtrl1', function($scope){
	$scope.value1 = '1111111111';
});
app1.directive('myDirective1', function(){
  return{    
    restrict: 'EA',
    template: '<div> Hello world {{user1}}</div>',	
    replace: true,
    link: function(scope, element, attrs){
		scope.user1 = '11111111111';
	}
}});
