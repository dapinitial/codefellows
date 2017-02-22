'use strict';

require('./gallery.scss');

module.exports = ['$log', GalleryController];

function GalleryController($log) {
  $log.debug('GalleryController');
  let vm = this;
  vm.title = 'This is the Gallery.';
}
