'use strict';

// require webpack assets
require('./scss/main.scss');

// npm modules
const cowsay = require('cowsay-browser');
const angular = require('angular');

// angular module
const cowsayApp = angular.module('cowsayApp', []);

// angular constructus
cowsayApp.controller('CowsayController', ['$log', CowsayController]);

function CowsayController($log) {
  $log.debug('init CowsayController');

  this.heading = 'What does the cow say?';
  this.backStack = [];
  this.current = null;
  this.characters = null;

  cowsay.list((err, characters) => {
    this.characters = characters;
    this.current = this.characters[0];
  });

  this.update = function(input) {
    $log.debug('cowsayCtrl.update()');
    return cowsay.say({
      text: input || this.heading,
      f: this.current
    });
  };

  this.save = function() {
    $log.debug('cowsayCtrl.save()');
    if (this.text) {
      this.backStack.push(this.update(this.text));
      this.current = this.backStack[this.backStack.length - 1];
      this.text = '';
    }
  };

  this.undo = function() {
    $log.debug('cowsayCtrl.undo()');
    this.backStack.pop();
    this.current = this.backStack[this.backStack.length - 1];
  };
}
