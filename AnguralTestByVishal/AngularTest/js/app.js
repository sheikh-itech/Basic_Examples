var app = angular.module('myApp', ['ngRoute','ui.bootstrap','ngResource']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: "templates/paragraph.html",
		controller: 'myCtrl'
      })  
	  .when('/services', {
        templateUrl: "templates/livesearch.html",
		controller: 'myCtrl'
      })
	.when('/editor', {
        templateUrl: "templates/editor.html",
		controller: 'InlineEditorController'
      })
	.when('/layout', {
        templateUrl: "templates/layout.html",
		controller: 'InlineEditorController'
      })
	.when('/order', {
        templateUrl: "templates/order.html",
		controller: 'myCtrl'
      })
	.when('/contact', {
        templateUrl: "templates/contact.html",
		controller: 'myCtrl'
      })
	 .otherwise({
        template: "<p style='color:red;margin-left:25%;'><big>Welcome to angularJS world<big></p>"
      });
});

app.controller('myCtrl',['$scope', '$http', function ($scope, $http){
	$scope.flag1 = false;	 
	$scope.flag2 = false;	 
	$scope.flag3 = false;	 
	$scope.flag4 = false;
	$scope.flag5 = false;
	$scope.toggle = false;
	$scope.toolTip = "Features of AngularJS";
	$scope.toolTipText = "create sleek and crisp";
	$scope.price = {"development":300,"design":400,"integration":250,"training":220};
	$scope.change = function(val) {
		if(val === 1){
			$scope.flag1 = true;
			$scope.flag2 = false;	 
			$scope.flag3 = false;	 
			$scope.flag4 = false;
			$scope.flag5 = false;
		}
		else if(val === 2){
			$scope.flag1 = false;
			$scope.flag2 = true;	 
			$scope.flag3 = false;	 
			$scope.flag4 = false;
			$scope.flag5 = false;
		}
		else if(val === 3){
			$scope.flag1 = false;
			$scope.flag2 = false;	 
			$scope.flag3 = true;	 
			$scope.flag4 = false;
			$scope.flag5 = false;
		}
		else if(val === 4) {
			$scope.flag1 = false;
			$scope.flag2 = false;	 
			$scope.flag3 = false;	 
			$scope.flag4 = true;
			$scope.flag5 = false;
		}
		else {
			$scope.flag1 = false;
			$scope.flag2 = false;	 
			$scope.flag3 = false;	 
			$scope.flag4 = false;
			$scope.flag5 = true;
		}
    };
	//  code for live search
	$http.get('data/countries.json').success(function(data) {
          $scope.dataList = data;
    });
	//  code for order form
	$scope.services = [
		{
			name: 'Web Development',
			price: 300,
			active:true
		},{
			name: 'Design',
			price: 400,
			active:false
		},{
			name: 'Integration',
			price: 250,
			active:false
		},{
			name: 'Training',
			price: 220,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};

	$scope.showtooltip = false;
	$scope.value = 'Edit me.';

	// Some helper functions that will be
	// available in the angular declarations

	$scope.hideTooltip = function(){

		// When a model is changed, the view will be automatically
		// updated by by AngularJS. In this case it will hide the tooltip.

		$scope.showtooltip = false;
	}

	$scope.toggleTooltip = function(e){
		e.stopPropagation();
		$scope.showtooltip = !$scope.showtooltip;
	}

}]);
app.controller('InlineEditorController',function($scope){
	$scope.showtooltip = false;
	$scope.value = 'Edit me.';

	// Some helper functions that will be
	// available in the angular declarations

	$scope.hideTooltip = function(){

		// When a model is changed, the view will be automatically
		// updated by by AngularJS. In this case it will hide the tooltip.

		$scope.showtooltip = false;
	}

	$scope.toggleTooltip = function(e){
		e.stopPropagation();
		$scope.showtooltip = !$scope.showtooltip;
	}

});