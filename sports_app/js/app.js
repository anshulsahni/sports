angular.module("sports_app",[
	"components",
	"services",
	"pages",
	"ngRoute",
	"ngResource"
	])
	.config(function($routeProvider){
		$routeProvider
			.when("/",{
				templateUrl:"./js/pages/register/index.html",
				controller:"RegisterPageController"
			})
	})