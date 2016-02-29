(function() {
    "use strict";

    angular.module('router.controller')
        .controller('Ctrl', ctrl);
    angular.module('router.controller')
        .controller('RouterCtrl', routerCtrl);
    angular.module('router.controller')
        .controller('RouterContactCtrl', routerContactCtrl);
    angular.module('router.controller')
        .controller('LinkCtrl', linkCtrl);
    angular.module('router.controller')
        .controller('ResolveCtrl', resolveCtrl);


    ctrl.$inject = ['$scope', '$state', '$stateParams'];

    function ctrl(scope, state, stateParams) {
        scope.gotoLink2 = function() {
            state.go('link2', {
                param1:{
                    param: 'State Param'
                }
            })
        }
    }

    routerCtrl.$inject = ['$scope'];

    function routerCtrl(scope) {
        scope.greeting="Router Home";
    }


    routerContactCtrl.$inject = [];

    function routerContactCtrl() {
        this.greeting="Router Contact";
    }

    linkCtrl.$inject = ['$scope'];

    function linkCtrl($scope) {
        $scope.greeting="Controller Provider";
    }

    resolveCtrl.$inject = ['$scope', 'gitHubService2'];

    function resolveCtrl(scope, gitHubService2) {
        scope.followers = gitHubService2.followers;
    }
})();



