'use strict';

describe('Controller:LimerickCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('Poementor'));
  beforeEach(angular.mock.module('templates'));

  var Limerick;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    Limerick = $injector.get('$controller')('Limerick');
  }));

  it('condition of test', function () {

  });

});
