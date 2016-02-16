(function() {
    "use strict";

    angular.module('activate')
        .controller('ActivateCtrl', activateCtrl);

    activateCtrl.$inject = ['$scope', '$state'];

    function activateCtrl(scope, state) {
        scope.goToAbout = function() {
            state.go('about');
        }

    }
})();



