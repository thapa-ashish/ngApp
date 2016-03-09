/**
*  Module
*
* Description
*/
angular.module('myApp').controller('loginController',['$log','$location',function($log,$location){
	this.hidemenu=false;
	this.login=function(){
		var username=this.username;
		var password=this.password;

		if(username=='admin' && password=='admin'){
			$location.path('/user');
			this.hidemenu=true;	
			
		}
	}
}]);