var app = angular.module('myApp', ['ngRoute']);

app.controller('myCtrl', function($scope) {
    
	$scope.master= [];
	$scope.varupdt = true;
	$scope.varmain = false;
	

	$scope.friends =[
		{name:'Sheikh'},
		{name:'Hafeez'},
		{name:'Mansoori'}
	];
     $scope.update = function(user) {
       // Example with 1 argument
	   if((user.type.isNaN)||(user.currency.isNaN)||(user.friend.isNaN)||(user.name.isNaN)||(user.date.isNaN)||(user.currency.isNaN)){
		   alert("Please enter values properly");
	   }if(user.type||user.currency||user.friend||user.name||user.date||user.amount != ''){
			$scope.master.push(angular.copy(user));
			$scope.user = {};
	   }
     };
	 
	 $scope.remove = function(index){

			 $scope.master.splice($scope.master.indexOf(index), 1);
     }
	 $scope.add = function(frnd){
		 if($scope.frnd.name != '') {
			$scope.friends.push(angular.copy(frnd));
			$scope.frnd = {};
		 }
	 }
	$scope.Update = function(index) {
		   
			$scope.updt = {
			type:'',
			friend:'',
			name:'',
			date:'',
			currency:'',
			amount:''
			};
		$scope.varmain = true;
		$scope.varupdt = false;
        $scope.updt = index;	
	  		
	   }
	   $scope.finalUpdate = function(index, user) {
		/*   if((user.type.isNaN)||(user.currency.isNaN)||(user.friend.isNaN)||(user.name.isNaN)||(user.date.isNaN)||(user.amount.isNaN)){
				alert("Please enter values properly");
			}
		*/	
			if(user.type||user.currency||user.friend||user.name||user.date||user.amount != ''){
				$scope.master[index] = $scope.user;
				$scope.varmain = false;
				$scope.varupdt = true;	
			}
	   }
 });
 /* This will requires server
 app.config(function($routeProvider) {
    $routeProvider
	  .when('/',
      {
        templateUrl: 'index.html',
        controller: 'AppCtrl'
      })
	  .when('/update',
      {
        templateUrl: 'update.html',
        controller: 'myCtrl'
      })
	 .otherwise({
        template: "Server problem please try after some time."
      })
});
*/