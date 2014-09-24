'use strict';

var assert = require('assert');

describe('invariant', function() {

  var invariant = require('../invariant');

  it('should work with a message', function() {
    assert.doesNotThrow(function() {
      invariant(true, 'invariant message');
    });
    assert.throws(function() {
      invariant(false, 'invariant message');
    }, /invariant message/);
  });

  it('should work without a message', function() {
    assert.doesNotThrow(function() {
      invariant(true);
    });
    assert.throws(function() {
      invariant(false);
    }, /minified exception occurred/i);
  });

});
