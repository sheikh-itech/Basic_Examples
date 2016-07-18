var app = angular.module('testApp', []);

app.controller('testCtrl', function() {
	
	this.test = 5;
	this.hide = true;
	this.fi = true;
	this.name = "sheikh hafeez";
	
	this.names = [{
					name:"sheikh1",
					subjects: [sheikh'A','B','C']
				},{
					name:"sheikh2",
					subjects: ['X','B','N']
				},{
					name:"sheikh3",
					subjects: ['M','V','N']
				}];
	this.click = function() {
		alert("I Am Button !");
	};
	this.students = [{id:1,name:"sheikh1"},{id:2,name:"sheikh2"},{id:3,name:"sheikh3"}];
	this.id = function(student) {
		alert(student.id);
	};
	this.initialize = function() {
		this.name = ' mansoori --- by ng-init';
	};
	this.toggle = function() {		
		this.hide = !this.hide;
	};
	this.toggle1 = function() {		
		this.fi = !this.fi;
	};

});