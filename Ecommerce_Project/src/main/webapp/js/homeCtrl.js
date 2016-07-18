app.controller('homeCtrl', function ($scope, $http){
	$scope.getLogin = function() {
        $http({
                method : 'GET',
                url : ''
        }).success(function(data, status, headers, config) {
                $scope.person = data;
        }).error(function(data, status, headers, config) {
                docoment.write("error on http mtd of app");
        }); 
    };
    $scope.login = function() {
    	alert('sheikh');
         
    };
});

