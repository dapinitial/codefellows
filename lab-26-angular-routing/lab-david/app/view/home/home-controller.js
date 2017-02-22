'use strict';

require('./home.scss');

module.exports = ['$log', HomeController];

function HomeController($log) {
  $log.debug('HomeController');
  let vm = this;
  vm.title = 'Welcome home.';
}
