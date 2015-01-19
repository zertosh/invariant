'use strict';

var assert = require('assert');

var __DEV__ = process.env.NODE_ENV !== 'production';

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

  it('should not work without a message', function() {
    assert.throws(function() {
      invariant(false);
    }, __DEV__ ? /requires an error/i : /minified exception occurred/i);
  });

});
