<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>AJAX with Servlets using AngularJS</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.7/angular.js"></script>
<script>
var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {

	//$scope.person={'firstName':'','lastName':''};
	
        $scope.getDataFromServer = function() {
                $http({
                        method : 'GET',
                        url : 'Servlet_to_Angular'
                }).success(function(data, status, headers, config) {
                        $scope.person = data;
                }).error(function(data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                });

        };
});
</script>
</head>
<body>
<div ng-app="myApp">
        <div ng-controller="MyController">
           <button ng-click="getDataFromServer()">Fetch data from server</button>
           <p>First Name : {{person.firstName}}</p>
           <p>Last Name : {{person.lastName}}</p>
        </div>
</div>
<a href="ajax.html">ajax to servlet page</a>
</body>
</html>