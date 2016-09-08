'use strict';

/**
 * @ngdoc controller
 *
 * @name Limerick
 *
 * @description
 * Controller for Poementor
 */
(function () {

  angular
    .module('Poementor')
    .controller('Limerick', Limerick);

  function Limerick() {
    var vm = this;

    vm.foo = [];
  }

})();

