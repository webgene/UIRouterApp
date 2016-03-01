angular.module("router.customdata", ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state("home", {
            url: "/home",
            template: "<h1>Custom Data Home</h1><p>{{cd1}}</p><p>{{cd2}}</p><div ui-view></div>",
            controller: "HomeCtrl",
            data: {
                cd1: 100,
                cd2: "Test Data"
            }
        })
            .state("about", {
                url: "/about",
                template: "<h1>Custom Data About</h1><p>{{cd1}}</p><p>{{cd2}}</p>",
                controller: "AboutCtrl"
            })
            .state("home.child", {
                url: "/homechild",
                template: "<h1>Custom Data Home Child</h1><p>{{cd1}}</p><p>{{cd2}}</p>",
                controller: "HomeChildCtrl"
            })

    });

angular.module("router.customdata")
    .controller('HomeCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.cd1 = $state.current.data.cd1;
        $scope.cd2 = $state.current.data.cd2;
    }]);

angular.module("router.customdata")
    .controller('HomeChildCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.cd1 = $state.current.data.cd1;
        $scope.cd2 = $state.current.data.cd2;
    }]);

angular.module("router.customdata")
    .controller('AboutCtrl', ['$scope', '$state', function ($scope, $state) {
        $scope.cd1 = $state.get('home').data.cd1;
        $scope.cd2 = $state.get('home').data.cd2;
    }]);






