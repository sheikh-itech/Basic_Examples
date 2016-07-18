var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
	  .when('/',
      {
        templateUrl: 'templates/login.html',
        controller: 'registerCtrl'
      })
      .when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'registerCtrl'
      })
	  .when('/exam', {
        templateUrl: "templates/exam.html",
		controller: 'examCtrl'
      })
	 .otherwise({
        template: "This doesn't exist!--Try through server"
      })
});

app.controller('registerCtrl',['$scope', '$location',function($scope,$location){
    
	$scope.warning = false;
    $scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {name: '', username: '',usertype: '',pass:'',contact:''}];
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	$scope.register = function() {
		$scope.todos.push({
			name: $scope.name,
			username: $scope.username,
			usertype: $scope.usertype,
			pass: $scope.pass,
			contact: $scope.contact
		});
		localStorage.setItem('todos', JSON.stringify($scope.todos));
		$scope.name = '';
		$scope.username = '';
		$scope.usertype = '';
		$scope.pass = '';
		$scope.contact = '';
	};

	$scope.login = function(path){
       myObj = JSON.parse(localStorage.getItem("todos"));
    for(i=0;i<myObj.length;i++)
	{
	   if((myObj[i].username === $scope.name)&&(myObj[i].pass === $scope.pass))
	   {
		 $scope.warning = false;
		 $location.path( path );
	     //alert(myObj[i].name+'='+myObj[i].username+'='+myObj[i].usertype+'='+myObj[i].pass+'='+myObj[i].contact);		 
	   }
	   else if((i+1) >= myObj.length)
	   {	
		   $scope.warning = true;//alert('wrong username or password');
	   }
	 }
	   
	};
}]);
app.controller('examCtrl', function ($scope, $http){
		  $scope.step = 0;
		  $scope.position = [0,1,2,3];
		  $scope.option = [];
        $http.get('javascript.json').success(function(data) {
          $scope.records = data;
    
        });
		$scope.next = function(){
			if($scope.step<9){
				$scope.step = $scope.step+1;
			}alert($scope.val);
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
    