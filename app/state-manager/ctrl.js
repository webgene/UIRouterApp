angular.module("router.controller", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("home", {
            url: "/home",
            templateUrl: "templates/ctrlhome.html",
            controller: "RouterCtrl"
        })
            .state("contact", {
                url: "/contact",
                template: "<h1>Contact</h1><p>{{contact.greeting}}</p>",
                /*controller: "RouterContactCtrl",
                controllerAs: "contact"*/
                //OR
                controller: "RouterContactCtrl as contact"
            })
            .state("about", {
                url: "/about",
                template: '<h1>About</h1><p>{{name}}</p>',
                controller : function ($scope) {
                    $scope.name = "Ui Router About"
                }
            })
            .state("link1", {
                url: "/link1?name",
                template: '<h1>Link1</h1><p>{{greeting}}</p>',
                controllerProvider: function($stateParams) {
                    var ctrlName = $stateParams.name + "Ctrl";
                    return ctrlName;
                }
            })
    });