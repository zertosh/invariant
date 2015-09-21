module.exports = function(t) {
  var invariant = require('../../');

  t.doesNotThrow(function() {
    invariant(true, 'invariant message');
  });

  t.throws(function() {
    invariant(false, 'invariant message');
  }, /invariant message/);

  t.throws(function() {
    invariant(true);
  }, /requires an error/i);

  t.throws(function() {
    invariant(false);
  }, /requires an error/i);
};
