angular.module('myApp',['ngRoute']).
config(function($routeProvider) {

	$routeProvider

	
            // route for the home page
            .when('/', {
            	templateUrl:'views/home.html'
            })

          // route for the about page
          .when('/about', {
          	templateUrl : 'views/about.html'
          })

            //route for home page
            .when('/home', {
            	templateUrl: 'views/home.html'
            })

            //route for contact page
            .when('/contact', {
             templateUrl:'views/contact.html'
           })

          //route after successful login
          .when('/user',{
          	templateUrl: 'views/userpage.html',
          });



});