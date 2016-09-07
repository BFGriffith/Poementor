'use strict';

/**
 * @ngdoc controller
 *
 * @name AppCtrl
 *
 * @description
 * The main application Controller for Poementor
 */
(function() {

  angular
    .module('Poementor')
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($rootScope) {
    var vm = this;

    vm.title = 'Poementor';

    $rootScope.$on('$stateChangeSuccess', stateChangeSuccess); // listen for state change

    /**
     * @name stateChangeSuccess
     *
     * @memberof AppCtrl
     *
     * @param {Object} event - the event object
     * @param {Object} newState - the new state object
     */
    function stateChangeSuccess(event, newState) {
      vm.title = newState.title;
    }
  }

})();
