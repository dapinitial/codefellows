require('./lib/test-helper');

let angular = require('angular');

describe('HomeController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController');
    });
  });

  describe('initial properties', () => {
    it('should have a title',  () => {
      expect(this.homeCtrl.title).toBe('Welcome home.');
    });
  });

});
