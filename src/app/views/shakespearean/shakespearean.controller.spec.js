'use strict';

describe('Controller:ShakespeareanCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('Poementor'));
  beforeEach(angular.mock.module('templates'));

  var Shakespearean;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    Shakespearean = $injector.get('$controller')('Shakespearean');
  }));

  it('condition of test', function () {

  });

});
