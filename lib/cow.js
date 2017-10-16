// courtesy: https://blog.codeship.com/mocha-js-chai-sinon-frontend-javascript-code-testing-tutorial/

// cow.js
(function(exports) {
  'use strict';

  function Cow(name) {
    this.name = name || 'Anon cow';
  }
  exports.Cow = Cow;

  Cow.prototype = {
    greets: function(target) {
      if (!target) {
        throw new Error('missing target');
      }
      return this.name + ' greets ' + target;
    }
  };

})(this);