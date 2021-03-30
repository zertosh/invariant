'use strict';

var browserify = require('browserify');
var test = require('tap').test;
var vm = require('vm');
var flow = require('flow-bin');
var execFile = require('child_process').execFile;
var path = require('path');

var file = __dirname + '/package/' + process.env.NODE_ENV + '.js';

test('node', function(t) {
  t.plan(4);
  require(file)(t);
});

test('browserify', function(t) {
  t.plan(7);
  var b = browserify({
    entries: file,
    standalone: 'package'
  });
  b.bundle(function(err, src) {
    t.notOk(err);
    t.notMatch(String(src), /\bprocess\.env\.NODE_ENV\b/);
    t.notMatch(String(src), /__DEV__/);
    var c = {};
    vm.runInNewContext(src, c);
    c.package(t);
  });
});

test('flow', function(t) {
  t.plan(1);
  execFile(flow, ['coverage', 'index.js'], {
    cwd: path.join(__dirname, 'flow')
  }, function (err, stdout) {
    // If the types are broken, we'd have coverage below 100%
    t.equal(stdout.trim(), 'Covered: 100.00% (7 of 7 expressions)');
  });
});
