angular.module("activate", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "templates/home.html"
        })
            .state("contact", {
                url: "/contact",
                template: "<h1>Contact</h1><p>Ui Router Contact</p>"
            })
            .state("about", {
                url: "/about",
                template: '<h1>About</h1><p>{{name}}</p>',
                controller : function ($scope) {
                    $scope.name = "Ui Router About"
                }
            })
    });