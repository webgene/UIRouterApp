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
                controller: function ($scope) {
                    $scope.name = "Ui Router About"
                }
            })
            .state("link1", {
                url: "/link1?name",
                template: '<h1>Link1</h1><p>{{greeting}}</p>',
                controllerProvider: function ($stateParams) {
                    var ctrlName = $stateParams.name + "Ctrl";
                    return ctrlName;
                }
            })
            .state("link2", {
                url: "/link2",
                template: '<h1>Link1</h1><p>{{param}}</p>',
                params: {
                    param1: null
                },
                controller: function($scope, $stateParams) {
                    $scope.param = $stateParams.param1;
                }

            })
            .state("resolve", {
                url: "/resolve",
                templateUrl: "templates/resolve.html",
                resolve: {
                    gitHubService: 'githubServices',
                    gitHubService2: function(gitHubService) {
                        return gitHubService.getFollowers()
                            .then(function(response){
                                return {followers: response.data};
                            })
                    }
                },
                /*controller: function ($scope, gitHubService) {
                    console.log('In Ctrl');
                    gitHubService.getFollowers()
                        .then(function(response) {
                           $scope.followers = response.data;
                        });
                }*/
                controller : "ResolveCtrl"
            })
    });




