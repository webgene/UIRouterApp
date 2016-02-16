(function() {
    "use strict";

    angular.module('router.controller')
        .controller('RouterCtrl', routerCtrl);
    angular.module('router.controller')
        .controller('RouterContactCtrl', routerContactCtrl);


    routerCtrl.$inject = ['$scope'];

    function routerCtrl(scope) {
        scope.greeting="Hello";
    }


    routerContactCtrl.$inject = [];

    function routerContactCtrl() {
        this.greeting="Good Morning!";
    }
})();



