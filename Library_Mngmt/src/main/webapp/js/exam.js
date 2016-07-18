var app1 = angular.module('examApp', []);

app1.controller('examController', function ($scope, $http, $location){

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
		  $scope.before_test = true;
		  $scope.start_test = false;
		  $scope.start_exam = false;
		  //$scope.post_answere = [];
       // $http.get('data/javascript.json').success(function(data) {
        //  $scope.records = data;
    
       // });
        $scope.startExam = function(){
        	if(localStorage.getItem('name') != null)
        	{        		
        	
        	$http({
                method : 'POST',
                url : 'http://localhost:8081/Library_Mngmt/webapi/test/details',
                headers:{'Content-Type':'application/json'},
                data:$scope.starttest
    		}).success(function(data, status, headers, config) {
    			if(data != null && status === 200){
    				$scope.filename = 'data/'+data;
    				$http.get($scope.filename).success(function(data) {
                        $scope.records = data; 
                        $scope.start_test = true;
                        $scope.before_test = false;
                      });
    			}
    			else { 
    				$scope.start_exam = true;
    				$scope.var_test_list =true;
    				//$location.path("/examHome");
    			}
    			
    		}).error(function(data, status, headers, config) {
    			$scope.start_exam = true;
				$scope.var_test_list =true;
    		});    	
            		  
           }else alert("please login again");
        };
		$scope.next = function(){
			if($scope.step<9){
				$scope.step = $scope.step+1;
			}//alert($scope.val);
			else {
				$scope.btn_1 = false;
				$scope.btn_2 = true;
				$scope.final_result = false;
			}
		};
		$scope.prev = function(){
			if($scope.step>0){
				$scope.step = $scope.step-1;
			}
		};
		$scope.change = function(val){
			//$scope.answere.push({
			//	ans:val
			//});
			$scope.answere[$scope.step] = val;
            localStorage.setItem('answere', JSON.stringify($scope.answere));
			myObj = JSON.parse(localStorage.getItem("answere"));
			//alert(myObj[0].val);
			if(val != null)
			{ 
				$scope.checked_answere[$scope.step]= val;
			}else $scope.checked_answere[$scope.step] = null;
			//alert(val);
		};
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
			}
			$scope.details = {
					"name":localStorage.getItem('name'),
					"write":$scope.write,
					"wrong":$scope.wrong
			};
			$http({
                method : 'POST',
                url : 'http://localhost:8081/Library_Mngmt/webapi/test/saveresult',
                headers:{'Content-Type':'application/json'},
                data:$scope.details
    		}).success(function(data, status, headers, config) {
    			$scope.result_flag = data;   			
    			
    		}).error(function(data, status, headers, config) {
                
    		});
			//localStorage.removeItem('name');
			$scope.btn_2 = false;
			$scope.final_result = true;
			$scope.start_test = false;
			$scope.logOut();
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
});
