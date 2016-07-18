var app = angular.module('libraryApp', ['ngRoute','examApp']);
app.config(function($routeProvider) {
    $routeProvider  
      .when('/', {
        templateUrl: "exam/login.html",
		controller: 'examCtrl'
      })
      .when('/register', {
        templateUrl: "exam/register.html",
		controller: 'examCtrl'
      })
      .when('/login', {
        templateUrl: "exam/login.html",
		controller: 'examCtrl'
      })
      .when('/examHome', {
        templateUrl: "exam/examHome.html",
		controller: 'examCtrl'
      })
      .when('/exam', {
        templateUrl: "exam/exam.html",
		controller: 'examController'
      })
      .when('/admin', {
        templateUrl: "exam/admin.html",
		controller: 'adminCtrl'
      })
      .when('/trainer', {
        templateUrl: "exam/trainer.html",
		controller: 'trainerCtrl'
      })
      .when('/admin', {
        templateUrl: "exam/admin.html",
		controller: 'adminCtrl'
      })
	 .otherwise({
        template: "<p style='color:red;margin-left:25%;'><big>Welcome to online exam system<big></p>"
      });
});
app.controller('examCtrl',['$scope', '$location','$http', function ($scope, $location, $http){
	
	$scope.reg_warning = false;
	$scope.login_warning = false;
	$scope.log_warning = false;
	$scope.reg_success = false;
	$scope.testListCond = '';
	
	$scope.var_test_list = false;
	$scope.register = function() {
        $http({
            method : 'POST',
            url : 'http://localhost:8081/Library_Mngmt/webapi/user/register',
            headers:{'Content-Type':'application/json'},
            data:$scope.user
        }).success(function(data, status, headers, config) {
            //$scope.reg_warning = data;
        	if(data === 'true'){
        		$scope.user = {};
        		$scope.reg_success = true;
        	}else $scope.reg_warning = true;
        }).error(function(data, status, headers, config) {
        	$scope.user = data;
        	$scope.reg_warning = true;
        }); 
    };   
    $scope.login = function() {
    	$scope.login = false;
    	$http({
            method : 'POST',
            url : 'http://localhost:8081/Library_Mngmt/webapi/user/login',
            headers:{'Content-Type':'application/json'},
            data:$scope.user
        }).success(function(data, status, headers, config) {
        	$scope.login = data;        	
        	if($scope.login === 'true')
        	{	
        		if($scope.user.type === 'Admin'){
        			$location.path("/admin");
        			localStorage.setItem('name', $scope.user.username);
        		}
        		else if($scope.user.type === 'Trainer'){
        			$location.path("/trainer");
        			localStorage.setItem('name', $scope.user.username);
        		}
        		else if($scope.user.type === 'Trainee'){
        			localStorage.setItem('name', $scope.user.username);
        			//$scope.trainee = $scope.user.username;
        			//alert($scope.trainee);
        			$location.path("/examHome");        			
        		} 
        		
        	}else $scope.log_warning = true;
        	$scope.user = {};
        }).error(function(data, status, headers, config) {
        	$scope.user = {};        	
        });    	
    }; 
    $scope.getTest = function(){
    	
    	$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/test/testlist/'+localStorage.getItem('name'),
		}).success(function(data, status, headers, config) {
            if(data.length > 0){
            	$scope.testList = data;
            	$scope.var_test_list = true;
            }else $scope.testListCond = "You don't have any test write now or login if not yet ?";
            //localStorage.removeItem('name');
		}).error(function(data, status, headers, config) {
            
		}); 
    };
}]);
app.controller('adminCtrl',['$scope', '$location','$http', function ($scope, $location, $http){
	
	$scope.updt_warning = false;//
	$scope.updt_success = false;//
	$scope.all_user_list = false;//
	$scope.allUserDetailSuccess = '';
	$scope.allUserDetailError = '';
	$scope.user_updated = false;
	$scope.user_update = false;//
	$scope.allUserDetail = [];
	$scope.userDetail = [];
	
	$scope.update = function() {
		
        $http({
            method : 'POST',
            url : 'http://localhost:8081/Library_Mngmt/webapi/admin/updateUser',
            headers:{'Content-Type':'application/json'},
            data:$scope.userDetail[0]
        }).success(function(data, status, headers, config) {
            if(data.length > 0){
        		$scope.allUserDetail = data;
        		$scope.all_user_list = true;
        		$scope.user_update = false;
            };
        }).error(function(data, status, headers, config) {
        	$scope.allUserDetail = data;
			if(data.length > 0) $scope.allUserDetailError = 'Some server problem occured please try later.';
        }); 
    };
    $scope.findDetails = function($index){
    	//alert($scope.allUserDetail[$index].username);
    	$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/admin/userDetails/'+$scope.allUserDetail[$index].username,
		}).success(function(data, status, headers, config) {
            $scope.userDetail = data;
            $scope.user_update = true;
            $scope.all_user_list = false;
            
            $scope.var_find = false;
            $scope.var_updt = true;
            
            //localStorage.removeItem('name');
		}).error(function(data, status, headers, config) {
			$scope.userDetail = data;
			$scope.find_fail = 'Some server problem occured please try later.';
		});
    };
    $scope.getAllUsersList = function(){
    	
    	$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/admin/allUserDetails',
		}).success(function(data, status, headers, config) {
			
			if(data.length > 0){
				$scope.allUserDetail = data;//alert($scope.allUserDetail[0].name);
				$scope.all_user_list = true;
				$scope.user_update = false;
			}else $scope.allUserDetailSuccess = "Recently you don't have any registered user.";
            //localStorage.removeItem('name');
		}).error(function(data, status, headers, config) {
			$scope.allUserDetail = data;
			if(data.length > 0) $scope.allUserDetailError = 'Some server problem occured please try later.';
		});
    };
    $scope.deleteUser = function($index){
    	
    	$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/admin/deleteUser/'+$scope.allUserDetail[$index].username,
		}).success(function(data, status, headers, config) {
			
			if(data.length > 0){
				$scope.allUserDetail = data;//alert($scope.allUserDetail[0].name);
				$scope.all_user_list = true;
			}else $scope.allUserDetailSuccess = "Recently you don't have any registered user.";                        
		}).error(function(data, status, headers, config) {
			$scope.allUserDetail = data;
			if(data.length > 0) $scope.allUserDetailError = 'Some server problem occured please try later.';
		});
    };
    $scope.logOut = function(){
    	localStorage.removeItem('name');
    	$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/user/logout'
		}).success(function(data, status, headers, config) {			                    
		}).error(function(data, status, headers, config) {
		});
    };
}]);
app.controller('trainerCtrl',['$scope', '$location','$http', function ($scope, $location, $http){
    
	$scope.var_test = false;
	$scope.save_test = false;
	$scope.var_test_list = false;
	$scope.var_test_result = false;
	
	$scope.persons = {};
	$scope.setTest = function() {
		
		$scope.var_test_list = false;
		$scope.var_test_result = false;
		$scope.var_test_result = false;
		$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/user/userlist'
		}).success(function(data, status, headers, config) {
            $scope.persons = data;
            $scope.var_test = true;
		}).error(function(data, status, headers, config) {
            
		}); 		
    };
    $scope.saveTest = function() {
    	
    	$scope.var_test_list = false;
    	$scope.var_test_result = false;
    	$scope.var_test_result = false;
    	$http({
            method : 'POST',
            url : 'http://localhost:8081/Library_Mngmt/webapi/user/save_test',
            headers:{'Content-Type':'application/json'},
            data:$scope.user
        }).success(function(data, status, headers, config) {
            //$scope.reg_warning = data;
        	$scope.user = {};
        	$scope.save_test = true;
        }).error(function(data, status, headers, config) {
        	$scope.user = data;        	
        }); 
    	$scope.save_test = false;
    };
    $scope.getTestList = function() {
		
		$scope.var_test = false;
		$scope.var_test_result = false;
		$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/user/testList'
		}).success(function(data, status, headers, config) {
            $scope.testList = data;
            $scope.var_test_list = true;
            $scope.var_test_result = false;
		}).error(function(data, status, headers, config) {
            
		}); 		
    };
    $scope.deleteTest = function($index){
    	
    	$scope.var_test = false;
		$scope.var_test_result = false;
		$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/user/delete/'+$scope.testList[$index].username+'/'+$scope.testList[$index].testname,
		}).success(function(data, status, headers, config) {
            $scope.testList = data;
            $scope.var_test_list = true;
            $scope.var_test_result = false;
		}).error(function(data, status, headers, config) {
            
		});
    };
    $scope.getTestResult = function(){
    	
    	
    	$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/test/results',
		}).success(function(data, status, headers, config) {
            $scope.testResult = data;
            
            $scope.var_test_list = false;
            $scope.var_test = false;
            $scope.var_test_result = true;
            //localStorage.removeItem('name');
		}).error(function(data, status, headers, config) {
            
		});
    };
    $scope.deleteTestResult = function($index){
    	
    	$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/test/delete/'+$scope.testResult[$index].name+'/'+$scope.testResult[$index].write+'/'+$scope.testResult[$index].wrong,
		}).success(function(data, status, headers, config) {
            $scope.testResult = data;
            
            $scope.var_test_list = false;
            $scope.var_test = false;
            $scope.var_test_result = true;
            //localStorage.removeItem('name');
		}).error(function(data, status, headers, config) {
            
		});
    };
    $scope.logOut = function(){
    	localStorage.removeItem('name');
    	$http({
            method : 'GET',
            url : 'http://localhost:8081/Library_Mngmt/webapi/user/logout'
		}).success(function(data, status, headers, config) {			                    
		}).error(function(data, status, headers, config) {
		});
    };
}]);