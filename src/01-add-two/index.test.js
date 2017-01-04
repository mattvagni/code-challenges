var assert = require('chai').assert;
var addTwo = require('./index');

it('addTwo()', function() {
    assert.equal(addTwo(2), 4);
    assert.equal(addTwo(0), 2);
});
