var assert = require('chai').assert;
var mostPopularWord = require('./index');

it('mostPopularWord()', function() {
    const speechB = "Omg wut? You made it to the end! Well done. Very well done :clap:"
    assert.deepEqual(mostPopularWord(speechB), 'well');
});
