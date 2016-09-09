'use strict';

(function() {

  angular
    .module('Poementor')
    .config(function ($stateProvider) {
      $stateProvider
        .state('poemSelector', {
          url         : '/poem-selector',
          templateUrl : 'app/views/poem-selector/poem-selector.view.html',
          controller  : 'PoemSelector',
          controllerAs: 'PoemSelector',
          title       : 'Poem selector'
        });
    });

})();