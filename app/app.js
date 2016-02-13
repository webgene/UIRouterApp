angular.module("myApp", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state("home",{
            url: "/home",
            templateUrl: "templates/home.html"
        }) 
        
});