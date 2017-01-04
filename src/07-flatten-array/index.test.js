var assert = require('chai').assert;
var flattenArray = require('./index');

it('flattenArray()', function() {
    assert.deepEqual(
        flattenArray([[1, 2], [3, 4], [5]]),
        [1, 2, 3, 4, 5]
    );
});
