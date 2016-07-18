var app = angular.module("myApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
	  .when('/',
      {
        templateUrl: 'templates/login.html',
        controller: 'registerCtrl'
      })
	  .when('/login',
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
    
	$scope.save = localStorage.getItem('answere');
	$scope.answere = (localStorage.getItem('answere')!==null) ? JSON.parse($scope.save) : [ {ans: ''}];
	localStorage.setItem('answere', JSON.stringify($scope.answere));

	$scope.login_warning = false;
	$scope.reg_warning = false;
	

    $scope.saved = localStorage.getItem('todos');
	$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {name: '', username: '',usertype: '',pass:'',contact:''}];
	localStorage.setItem('todos', JSON.stringify($scope.todos));

	$scope.register = function() {
		var flag = true;
        var myObj = JSON.parse(localStorage.getItem("todos"));
		for(var i=0;i<myObj.length;i++){
			if($scope.username === myObj[i].username){ 
				$scope.reg_warning =true;
				//alert($scope.username+' exist'); 
				flag = false;
				return false;
				}
		}
		if(flag){
		$scope.reg_warning =false;
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
		$scope.contact = '';}
	};

	$scope.login = function(path){
       myObj = JSON.parse(localStorage.getItem("todos"));
    for(i=0;i<myObj.length;i++)
	{
	   if((myObj[i].username === $scope.name)&&(myObj[i].pass === $scope.pass))
	   {
		 $scope.login_warning = false;
		 //$rootScope.user_name = $scope.name;
		 //alert($scope.user_name);
		 $location.path( path );
		 return true;
	     //alert(myObj[i].name+'='+myObj[i].username+'='+myObj[i].usertype+'='+myObj[i].pass+'='+myObj[i].contact);		 
	   }
	   else if((i+1) >= myObj.length)
	   {	
		   $scope.login_warning = true;//alert('wrong username or password');
	   }
	 }
	   
	};
}]);
app.controller('examCtrl', function ($scope, $http){


	$scope.save = localStorage.getItem('answere');
	$scope.answere = (localStorage.getItem('answere')!==null) ? JSON.parse($scope.save) : [ {ans: ''}];
	localStorage.setItem('answere', JSON.stringify($scope.answere));

		  $scope.step = 0;
		  $scope.position = [0,1,2,3];
		  $scope.option = [];
		  $scope.checked_answere = [];
		  $scope.btn_1 = true;
		  $scope.btn_2 = false;
		  $scope.final_result = false;
		  $scope.write = 0;
		  $scope.wrong = 0;
		  $scope.no_ans = 0;
		  //$scope.post_answere = [];
        $http.get('data/javascript.json').success(function(data) {
          $scope.records = data;
    
        });
		$scope.next = function(){
			if($scope.step<9){
				$scope.step = $scope.step+1;
			}//alert($scope.val);
			else {
				$scope.btn_1 = false;
				$scope.btn_2 = true;
				$scope.final_result = false;
			}
		}
		$scope.prev = function(){
			if($scope.step>0){
				$scope.step = $scope.step-1;
			}
		}
		$scope.change = function(val){
			$scope.answere.push({
				ans:val
			});
            localStorage.setItem('answere', JSON.stringify($scope.answere));
			myObj = JSON.parse(localStorage.getItem("answere"));
			//alert(myObj[0].val);
			if(val != null)
			{ 
				$scope.checked_answere.push(val);
			}else $scope.checked_answere.push(null);
			//alert(val);
		}
		$scope.result = function(){			
       
			for(var i=0;i<$scope.checked_answere.length;i++){
				
				if($scope.checked_answere[i] === true) {
					$scope.write = $scope.write+1;
				}
				else if($scope.checked_answere[i] === false) {
					$scope.wrong = $scope.wrong+1;
				}
				else {
					$scope.no_ans = $scope.no_ans+1;
				}
			}$scope.btn_2 = false;
			$scope.final_result = true;
		}
});
    