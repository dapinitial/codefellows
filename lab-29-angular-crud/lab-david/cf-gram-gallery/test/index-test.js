'use strict';

require('./lib/test-helper');

describe('HomeController', function() {
  beforeEach(() => {
    // angular.mock.module('routesApp');
    // angular.mock.inject($controller => {
    //   this.homeCtrl = new $controller('HomeController');
    // });
  });

  describe('initial properties', () => {
    it('should be falsy',  () => {
      expect(false).toBe(false);
    });
  });

});
