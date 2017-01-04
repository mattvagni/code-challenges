var assert = require('chai').assert;
var arrayToObject = require('./index');

it('arrayToObject()', function() {
    assert.deepEqual(
        arrayToObject(
            [
                ['a', 1],
                ['b', 2],
                ['c', 'foo']
            ]
        ),
        {
            a: 1,
            b: 2,
            c: 'foo'
        }
    );
});
