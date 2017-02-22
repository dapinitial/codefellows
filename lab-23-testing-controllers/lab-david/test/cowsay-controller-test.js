require('./lib/test-helper');

let angular = require('angular');
let cowsay = require('cowsay-browser');

describe('CowsayController', function() {
  beforeEach(() => {
    angular.mock.module('cowsayApp');
    angular.mock.inject($controller => {
      this.cowsayCtrl = new $controller('CowsayController');
    });
  });

  describe('initial properties', () => {
    it('should have a title that says What does the cow say?',  () => {
      expect(this.cowsayCtrl.heading).toBe('What does the cow say?');
    });
  });

  describe('history property should be an empty array', () => {
    it('should have a title that says What does the cow say?',  () => {
      expect(Array.isArray(this.cowsayCtrl.backStack)).toBe(true);
    });
  });

  it('list of cowfiles should show proper cowfiles', () => {
    cowsay.list((err, list) => {
      expect(this.cowsayCtrl.characters).toEqual(list);
      expect(this.cowsayCtrl.current).toEqual(list[0]);
    });
  });

  describe('#update', () => {
    it('should return a character that says testing', () => {
      let expected = cowsay.say({text: 'testing', f: this.cowsayCtrl.current });
      let result = this.cowsayCtrl.update('testing');
      expect(result).toEqual(expected);
    });
  });

  describe('#save', () => {
    beforeEach(() => {
      this.cowsayCtrl.text = 'Hello world!';
    });
    it('should return a saved character', () => {
      // console.log(this.cowsayCtrl.backStack);
      this.cowsayCtrl.save();
      // console.log('---------');
      // console.log(this.cowsayCtrl.text);
      // console.log('---------');
      expect(this.cowsayCtrl.backStack.length).toEqual(1);
    });
  });

  describe('#undo', () => {
    beforeEach(() => {
      this.cowsayCtrl.text = 'Hello world!';
      this.cowsayCtrl.backStack.push(this.cowsayCtrl.update(this.text));
    });
    it('should remove the last saved character', () => {
      // console.log('---------');
      // console.log(this.cowsayCtrl.backStack);
      // console.log('---------');
      // console.log('---------');
      // console.log('before the undo() is run, the backstack should be equal to one: ' + this.cowsayCtrl.backStack.length);
      // console.log('---------');
      expect(this.cowsayCtrl.backStack.length).toEqual(1);
      this.cowsayCtrl.undo();
      // console.log('---------');
      // console.log('the undo() was run, the backstack should be equal to zero: ' + this.cowsayCtrl.backStack.length);
      // console.log('---------');
      expect(this.cowsayCtrl.backStack.length).toEqual(0);
    });
  });

});
