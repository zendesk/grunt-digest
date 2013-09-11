'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.digest = {
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/123.txt');
    var expected = grunt.file.read('test/expected/123-5ba48b6e5a7c4d4930fda256f411e55b.txt');
    test.equal(actual, expected, 'Should be the same file');

    test.done();
  }
};
