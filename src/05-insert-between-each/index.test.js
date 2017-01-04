var assert = require('chai').assert;
var insertBetweenEach = require('./index');

it('insertBetweenEach()', function() {

    assert.deepEqual(
        insertBetweenEach([1, 2, 3], 'foo'),
        [1, 'foo', 2, 'foo', 3]
    );

    assert.deepEqual(
        insertBetweenEach([1], 'foo'),
        [1]
    );

    assert.deepEqual(
        insertBetweenEach([], 'foo'),
        []
    );
});
