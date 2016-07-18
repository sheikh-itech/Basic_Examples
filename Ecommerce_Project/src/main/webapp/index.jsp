<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Web app using angular java</title>
</head>
<body>
<div ng-app="ecommerceApp">
	
		<ng-view></ng-view>	
  
</div>

    <h2>Jersey RESTful Web Application!</h2>
    <p><a href="webapi/myresource">Jersey resource</a>
    <p>Visit <a href="http://jersey.java.net">Project Jersey website</a>
    for more information on Jersey!
    <script src="js/angular.js"></script>
    <script src="js/angular-route.js"></script>
    <script src="js/app.js"></script>
    <script src="js/myCtrl.js"></script>
    <script src="js/homeCtrl.js"></script>
</body>
</html>
