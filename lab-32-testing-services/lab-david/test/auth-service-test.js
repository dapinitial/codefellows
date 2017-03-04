'use strict';

describe('Auth Service', function(){

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(( $rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      })
      .catch( err => {
        expect(err).toEqual(null);
      });

      this.$rootScope.$apply();
    });
  });

  // describe('authService.setToken', () => {
  //   it('should return no token', () => {
  //
  //     this.authService.token = null;
  //     this.$window.localStorage.setItem('token', '');
  //     token = _token;
  //     return this.$q.resolve(token);
  //
  //     this.authService.setToken(token)
  //     .then( token => {
  //       expect(token).toEqual('no token');
  //     })
  //     .catch( err => {
  //       expect(err).toEqual(null);
  //     });
  //
  //     this.$rootScope.$apply();
  //   });
  // });

});
