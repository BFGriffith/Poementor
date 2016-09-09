'use strict';

/**
 * @ngdoc controller
 *
 * @name Shakespearean
 *
 * @description
 * Controller for Poementor
 */
(function () {

  angular
    .module('Poementor')
    .controller('shakespearean', Shakespearean);

  function shakespearean() {
    var vm = this;

    vm.foo = [];
  }

})();
