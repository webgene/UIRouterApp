(function () {
    "use strict";

    angular.module('router.controller')
        .factory('githubServices', githubServices);


    githubServices.$inject = ['$http', '$q', '$log'];

    function githubServices($http, $q, $log) {

        return {
            getFollowers: getFollowers
        }

        function getFollowers() {
            return $http.get('https://api.github.com/users/webgene/followers');
        }
    }
})();