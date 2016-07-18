var app = angular.module("itechApp", ['ngAnimate', 'ui.bootstrap','ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
	  .when('/',
      {
        templateUrl: 'templates/carousel_home.html',
        controller: 'itechCtrl'
      })
      .when('/carousel_home', {
        templateUrl: 'templates/carousel_home.html',
        controller: 'itechCtrl'
      })
	 .when('/about_us', {
        templateUrl: 'templates/about_us.html',
        controller: 'itechCtrl'
      })
	.when('/contact_us', {
        templateUrl: 'templates/contact_us.html',
        controller: 'itechCtrl'
      })
      .when('/business_strategies', {
        templateUrl: 'templates/business_strategies.html',
        controller: 'itechCtrl'
      })
      .when('/vision', {
        templateUrl: 'templates/vision.html',
        controller: 'itechCtrl'
      })
	 .when('/service', {
        templateUrl: 'templates/service.html',
        controller: 'itechCtrl'
      })
	 .when('/service_erp', {
        templateUrl: 'templates/service_erp.html',
        controller: 'itechCtrl'
      })
	 .when('/consulting', {
        templateUrl: 'templates/consulting.html',
        controller: 'itechCtrl'
      })
	 .when('/quality', {
        templateUrl: 'templates/quality_assurance.html',
        controller: 'itechCtrl'
      })
	 .when('/analysis', {
        templateUrl: 'templates/business_analysis.html',
        controller: 'itechCtrl'
      })
     .when('/product', {
        templateUrl: 'templates/product_home.html',
        controller: 'itechCtrl'
      })
	 .when('/telecom', {
        templateUrl: 'templates/product_telecom.html',
        controller: 'itechCtrl'
      })
	 .when('/other', {
        templateUrl: 'templates/product_other.html',
        controller: 'itechCtrl'
      })
	 .when('/resource', {
        templateUrl: 'templates/resource.html',
        controller: 'itechCtrl'
      })
     .when('/news', {
        templateUrl: 'templates/news.html',
        controller: 'itechCtrl'
      })
      .when('/c', {
        templateUrl: 'templates/c.html',
        controller: 'itechCtrl'
      })
	  .when('/c_plus', {
        templateUrl: 'templates/c++.html',
        controller: 'itechCtrl'
      })
      .when('/java', {
        templateUrl: 'templates/java.html',
        controller: 'itechCtrl'
      })
      .when('/why', {
        templateUrl: 'templates/why.html',
        controller: 'itechCtrl'
      })
	.when('/clients', {
        templateUrl: 'templates/clients.html',
        controller: 'itechCtrl'
      })
	.when('/carrier', {
        templateUrl: 'templates/carrier.html',
        controller: 'itechCtrl'
      })
  	 .otherwise({
        template: "This doesn't exist!--Try through server"
      })
});

app.controller('itechCtrl',['$scope', '$location',function($scope,$location){
    
	$scope.info_send = false;

  /*   This part of coding for carousel at home page(carousel_home)  */
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  var slides = $scope.slides = [
	{
	  image:"corousel/img1.jpg",
      heading:"About bussiness strategies",
	  text:"Itech have expertise over different business operations by experience"
	},
	{
	   image:"corousel/img2.jpg",
	   heading:"Recent Technologies",
	   text:"ITech believes that updated technologies makes life experience much better"
	},
	{
	  image:"corousel/img3.jpg",
	  heading:"Java used widely for enterprise applecations",
	  text:"We provides software development services moslty for enterprize organizations"
	}
  ];

 /*  Casousel of services part of design*/

	var services = $scope.services = [
	{
	  image:"corousel/service_1.jpg"
	},
	{
	   image:"corousel/service_2.jpg"
	},
	{
	  image:"corousel/service_3.jpg"
	}
  ];

/*  Casousel of resourcce part of design*/

	var language = $scope.language = [
	{
	  image:"corousel/c.jpg",
      link:"c"
	},
	{
	   image:"corousel/c++.jpg",
	   link:"c_plus"
	},
	{
	  image:"corousel/java.jpg",
	  link:"java"
	}
  ];


/*  Casousel of services erp part of design*/
	var erp = $scope.erp = [
	{
	  image:"corousel/erp1.jpg"
	},
	{
	   image:"corousel/erp2.jpg"
	},
	{
	  image:"corousel/erp3.jpg"
	}
  ];

  /* Codes for accordion */

  $scope.status_open = true;

  /*  Codes for pannels  */

  $scope.sdlcToolTip = "software-development-life-cycle";
  $scope.b2bToolTip = "business - two - business";
  
  $scope.info = function(){
	$scope.info_send = true;
	$scope.user =  {};
  };
}]);
app.controller('xxxCtrl',['$scope', '$location',function($scope,$location){

}]);   