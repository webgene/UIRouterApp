(function(){
    var module = angular.module("activate", ["ui.router"]);


    module.config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state("home", {
                url: "/home",
                templateUrl: "templates/home.html"
            })
                .state("contact", {
                    url: "/contact",
                    template: "<h1>Contact</h1><p>Ui Router Contact</p>"
                })
                .state("uistate", {
                    url: "/uistate",
                    template: "<h1>State</h1><p>Ui State</p>"
                })
                .state("about", {
                    url: "/about",
                    template: '<h1>About</h1><p>{{name}}</p>',
                    controller : function ($scope) {
                        $scope.name = "Ui Router About"
                    }
                })
        });


    module.controller('ActivateCtrl', activateCtrl);

    activateCtrl.$inject = ['$scope', '$state'];

    function activateCtrl(scope, state) {
        scope.goToAbout = function() {
            state.go('about');
        }

        scope.uiState = "uistate";

    }
})();
