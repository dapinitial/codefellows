describe('GalleryController', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController');
    });
  });

  describe('initial properties', () => {
    it('should have a title',  () => {
      expect(this.galleryCtrl.title).toBe('This is the Gallery.');
    });
  });

});
