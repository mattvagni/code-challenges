var assert = require('chai').assert;
var sumArray = require('./index');

it('sumArray()', function() {
    assert.equal(sumArray([1,2,3]), 6);
    assert.equal(sumArray([100]), 100);
    assert.equal(sumArray([]), 0);
});
