angular.module("myApp", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){
        $stateProvider.state("home",{
            url: "/home",
            templateUrl: "templates/home.html"
        }) 
        .state("contact",{
            url: "/contact",
            template: "<h1>Contact</h1><p>Ui Router Contact</p>"
        }) 
        .state("about",{
            url: "/about?view",
            templateUrl: function ($stateParams){
                return 'templates/' + $stateParams.view + '.html';
            }
        }) 
        
});