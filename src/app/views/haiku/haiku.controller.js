'use strict';

/**
 * @ngdoc controller
 *
 * @name Haiku
 *
 * @description
 * Controller for Poementor
 */
(function () {

  angular
    .module('Poementor')
    .controller('Haiku', Haiku);

  function Haiku() {
    var vm = this;

    vm.foo = [];
  }

})();

