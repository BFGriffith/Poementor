'use strict';

describe('Controller:PoemSelectorCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('Poementor'));
  beforeEach(angular.mock.module('templates'));

  var PoemSelector;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    PoemSelector = $injector.get('$controller')('PoemSelector');
  }));

  it('condition of test', function () {

  });

});
