angular.module('myApp', [])
   .controller('myCtrl', function($scope) {
    
	$scope.master= [];
	

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

			 $scope.master.splice(index, 1);
     }
	 $scope.add = function(frnd){
		 if($scope.frnd.name != '') {
			$scope.friends.push(angular.copy(frnd));
			$scope.frnd = {};
		 }
	 }
	$scope.Update = function(index) {
				
    	/*$scope.user = {
		 type:'',
		 friend:'',
		 name:'',
		 date:'',
		 currency:'',
		 amount:''
		};*/
		$scope.var1 = true;
		$scope.var2 = false;
        $scope.user = $scope.master[index];			
	   }
	   $scope.finalUpdate = function(index, user) {
	         $scope.master[index] = $scope.user;
			 $scope.addfrnd = true;
			$scope.addfrm = false;
			$scope.addshow = false;
			$scope.addupdt = true;	
	   }
 });