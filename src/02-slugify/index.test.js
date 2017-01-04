var assert = require('chai').assert;
var slugify = require('./index');

it('slugify()', function() {
    assert.equal(slugify('This is a title'), 'this-is-a-title');
    assert.equal(slugify('OMG'), 'omg');
});
