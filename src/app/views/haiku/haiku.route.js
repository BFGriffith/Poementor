'use strict';

(function() {

  angular
    .module('Poementor')
    .config(function ($stateProvider) {
      $stateProvider
        .state('haiku', {
          url         : '/haiku',
          templateUrl : 'app/views/haiku/haiku.view.html',
          controller  : 'Haiku',
          controllerAs: 'Haiku',
          title       : 'Haiku'
        });
    });

})();