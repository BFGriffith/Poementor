'use strict';

/**
 * @ngdoc controller
 *
 * @name PoemSelector
 *
 * @description
 * Controller for Poementor
 */
(function () {

  angular
    .module('Poementor')
    .controller('PoemSelector', PoemSelector);

  function PoemSelector() {
    var vm = this;

    vm.foo = [];
  }

})();

