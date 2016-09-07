'use strict';

describe('Controller:HaikuCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('Poementor'));
  beforeEach(angular.mock.module('templates'));

  var Haiku;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    Haiku = $injector.get('$controller')('Haiku');
  }));

  it('condition of test', function () {

  });

});
