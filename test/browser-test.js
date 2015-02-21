'use strict';

var assert = require('assert');

describe('invariant-browser', function() {

  var invariant = require('../browser');

  it('should work with a message', function() {
    assert.doesNotThrow(function() {
      invariant(true, 'invariant message');
    });
    assert.throws(function() {
      invariant(false, 'invariant message');
    }, /invariant message/);
  });

  if (process.env.NODE_ENV !== 'production') {
    it('should not work without a message in DEV', function() {
      assert.throws(function() {
        invariant(true);
      }, /requires an error/i);
      assert.throws(function() {
        invariant(false);
      }, /requires an error/i);
    });
  } else {
    it('should work without a message in PROD', function() {
      assert.doesNotThrow(function() {
        invariant(true);
      });
      assert.throws(function() {
        invariant(false);
      }, /minified exception occurred/i);
    });
  }

});
