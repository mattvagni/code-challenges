var assert = require('chai').assert;
var mergeObjects = require('./index');

it('mergeObjects()', function() {

    const objectA = {
        a: 1,
        b: 2
    };

    const objectB = {
        foo: 'bar',
        baz: 'lol',
        b: 3
    };

    assert.deepEqual(mergeObjects(objectA, objectB), {
        a: 1,
        b: 3,
        foo: 'bar',
        baz: 'lol'
    });

});
