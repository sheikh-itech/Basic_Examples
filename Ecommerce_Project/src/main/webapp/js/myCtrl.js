app.controller('myCtrl', function ($scope, $http){
	$scope.getDataFromServer = function() {
        $http({
                method : 'GET',
                url : 'http://localhost:8081/Ecommerce_Project/webapi/myresource'
        }).success(function(data, status, headers, config) {
                $scope.person = data;
        }).error(function(data, status, headers, config) {
                docoment.write("error on http mtd of app");
        }); 
    };
    $scope.getData = function() {
        $http({
                method : 'POST',
                url : 'http://localhost:8081/Ecommerce_Project/webapi/postresource',
                headers:{'Content-Type':'application/json'},
                data:$scope.person
        }).success(function(data, status, headers, config) {
                $scope.person = data;
        }).error(function(data, status, headers, config) {
                docoment.write("error on http mtd of app");
        }); 
    };
});

