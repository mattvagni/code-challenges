var assert = require('chai').assert;
var titleCase = require('./index');

it('titleCase()', function() {
    assert.equal(titleCase('This is a title'), 'This Is A Title');
    assert.equal(titleCase('OMG'), 'Omg');
    assert.equal(titleCase(''), '');
});
