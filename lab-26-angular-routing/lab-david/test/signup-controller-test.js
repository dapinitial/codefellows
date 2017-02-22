describe('SignupController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('initial properties', () => {
    it('should have a title',  () => {
      expect(this.signupCtrl.title).toBe('This is where you sign up.');
    });
  });

});
