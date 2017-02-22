'use strict';

require('./signup.scss');

module.exports = ['$log', SignupController];
function SignupController($log) {
  $log.debug('signupController');
  let vm = this;
  vm.title = 'This is where you sign up.';
}
