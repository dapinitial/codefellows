require('./lib/test-helper');

let angular = require('angular');
let playerService = require('../app/service/player-service');

describe('Player Info Controller', function() {
  beforeEach(() => {
    angular.mock.module('ngAdventure');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('PlayerInfoController');
    });
  });

  describe('negative case', () => {
    it('and can have a negative case', () => {
      expect(false).not.toBe(true);
    });
  });

  describe('positive case', () => {
    it('and can have a negative case', () => {
      expect(true).toBe(true);
    });
  });

  describe('initial properties', () => {
    it('testing this.player',  () => {
      expect(this.PlayerInfoController.player).toBe(playerService.player);
    });
  });

});
