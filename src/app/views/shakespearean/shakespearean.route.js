'use strict';

(function() {

  angular
    .module('Poementor')
    .config(function ($stateProvider) {
      $stateProvider
        .state('shakespearean', {
          url         : '/shakespearean',
          templateUrl : 'app/views/shakespearean/shakespearean.view.html',
          controller  : 'shakespearean',
          controllerAs: 'shakespearean',
          title       : 'Shakespearean'
        });
    });

})();
