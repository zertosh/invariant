module.exports = function(t) {
  var invariant = require('../../');

  t.doesNotThrow(function() {
    invariant(true, 'invariant message');
  });

  t.throws(function() {
    invariant(false, 'invariant message');
  }, /invariant message/);

  t.doesNotThrow(function() {
    invariant(true);
  });

  t.throws(function() {
    invariant(false);
  }, /minified exception occurred/i);
};
