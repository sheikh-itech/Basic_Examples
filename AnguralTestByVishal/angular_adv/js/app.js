var app = angular.module("myApp", ['ngRoute','ui.bootstrap','angular-confirm']);

app.config(function($routeProvider) {
    $routeProvider
	  .when('/',
      {
        templateUrl: 'templates/add.html',
        controller: 'addCtrl',
			resolve: {
      "userDetails": function($http) {
        return {

          getDetails: function( ) {
	var user = localStorage.getItem('user');
	var user = (localStorage.getItem('user')!==null) ? JSON.parse(user) : [];
      localStorage.setItem('user', JSON.stringify(user));

			$http.get('data/details.json').success(function(data) {
			var hit = true;
			var myObj = JSON.parse(localStorage.getItem("user"));
			for(var i=0;i<data.length;i++){
				for(j=0;j<myObj.length;j++){
					if(data[i].name === myObj[j].name)
						hit = false;
				}
				if(hit === true){
				myObj.push({
			name: data[i].name,
			loc: data[i].loc,
			email: data[i].email
				});
				}
			localStorage.setItem('user', JSON.stringify(myObj));			
		  }
		});

            return (myObj = JSON.parse(localStorage.getItem("user")));
          }
        };
      }
    }
      })
	 .otherwise({
        template: "This doesn't exist!--Try through server"
      })
});

app.controller('addCtrl',function($scope, userDetails,$confirm){
/*
  var obj = JSON.parse(localStorage.getItem("user"));
  if(obj !== null)
	obj.splice(0,1);
  localStorage.setItem('user', JSON.stringify(obj));
*/
  $scope.clas = false;
  $scope.caption = 'Asc';
  $scope.sign = '+name';
  $scope.sign_flag = true;
  $scope.add = false;
  $scope.var_detail = false;
  $scope.mov = false;

  $scope.AscDesc = function(){
	if($scope.sign_flag){
		$scope.sign = '-name';
		$scope.caption = 'Desc';
		$scope.sign_flag = false;
	}
	else {
		$scope.sign = '+name';
		$scope.caption = 'Asc';
		$scope.sign_flag = true;
	};
  };
  $scope.userDetail = userDetails.getDetails( );
  
		$scope.currentDetails = function($index,detail){
			//var myObj = JSON.parse(localStorage.getItem("user"));
			$scope.current = detail;
			$scope.cus = 'Customer '
			$scope.index = $index+1;
			$scope.var_detail = true;
		};
		
	$scope.delete = function($index, detail){
		
		$confirm({text: 'Are you sure you want to delete?', title: 'Please Confirm Your Action', ok: 'Yes', cancel: 'No'})
        .then(function() {
          var myObj = JSON.parse(localStorage.getItem("user"));
			for(var i=0;i<myObj.length;i++){
				if(myObj[i].name === detail.name)
				{
					myObj.splice(i,1);
				}
			}
			location.reload();
			$scope.var_detail = false;
			localStorage.setItem('user', JSON.stringify(myObj));
        });
		
	};
	$scope.addInfo = function() {
		//alert($scope.name+'---'+$scope.loc+'----'+$scope.email);
		var flag = true;
        var myObj = JSON.parse(localStorage.getItem("user"));
		for(var i=0;i<myObj.length;i++){
			if($scope.name === myObj[i].name){ 
				
				//alert($scope.username+' exist'); 
				flag = false;
				$scope.add = true;
				alert('User Already Exist ! Choose Another Name');
				return false;
				}
		}
		if(flag){
		myObj.push({
			name: $scope.name,
			loc: $scope.loc,
			email: $scope.email			
		});
		localStorage.setItem('user', JSON.stringify(myObj));
		$scope.name = '';
		$scope.loc = '';
		$scope.email = '';
		}
		location.reload();
	};	
});
   