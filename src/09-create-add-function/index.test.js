var assert = require('chai').assert;
var createAddFunction = require('./index');

it('createAddFunction()', function() {

    var addHundred = createAddFunction(100);

    assert.deepEqual(addHundred(2), 102);
    assert.deepEqual(addHundred(100), 200);
});
