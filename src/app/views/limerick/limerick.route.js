'use strict';

(function() {

  angular
    .module('Poementor')
    .config(function ($stateProvider) {
      $stateProvider
        .state('limerick', {
          url         : '/limerick',
          templateUrl : 'app/views/limerick/limerick.view.html',
          controller  : 'Limerick',
          controllerAs: 'Limerick',
          title       : 'Limerick'
        });
    });

})();