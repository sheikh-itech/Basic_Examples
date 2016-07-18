angular.module('components', [])
	.directive('helloWorld', function(){
		return{
			restrict: 'EA',
			scope:{
				n1:"bind"
			},
			templateUrl: 'hello.html'		
		}	
	});
angular.module('angulars', [])
	.directive('helloAngular', function(){
		return{
			restrict: 'EA',
			scope: {
				n2:"bind"
			},
            templateUrl: 'hello1.htm'
		}
	});
angular.module('helloApp', ['components','angulars']);
