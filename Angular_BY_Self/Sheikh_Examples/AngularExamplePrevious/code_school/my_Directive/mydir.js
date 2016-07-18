var v=angular.module("myapp",[])
v.controller('myDir', function(){
	var app=this;
    app.message = "hello";
});
v.directive("myFirstDir", function(){

	return function(scope, element, attrs)
	{
		element.text(scope.app.message+ " "+attrs.message);
	}
});