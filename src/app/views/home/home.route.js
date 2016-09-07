'use strict';

(function () {

  angular
    .module('Poementor')
    .config(function ($stateProvider) {
      $stateProvider
        .state('main.home', {
          url         : '/',
          templateUrl : 'app/views/home/home.view.html',
          controller  : 'HomeCtrl',
          controllerAs: 'HomeCtrl',
          title       : 'home'
        });
    });

}());
