Hey :wave:,

I made this purposefully challenging so don't expect to breeze through this but it should give you some good fundamentals :grin:


### Setup

Make sure you have node installed. You can install it here: https://nodejs.org/en/ (Use the later version)

Once you have it installed, clone this repo, go into it and run this:

```bash
npm install
```

### Explanation

How it works is that each folder in `src/` is one 'challenge'.

They are numbered and get harder as you go. Feel free to skip around if you like but I would definitely not do the last one until you solved the other ones – it kind of builds up so that by the end the last one should be easier.

Within each exercise folder there are two files:
- `index.js` is basically an empty function which you have to implement
- `index.test.js` is the test that will check your code does what it's meant to.

To check what it is that you have to do, check the tests. We can go through these together so I can show you how they work.


### Checking Your Work

To run the tests (and see if it works) you can do:

```bash
npm test
```
What this will do is run all tests.

This can be annoying so if you want to run a single test and just focus on one 'challenge' at a time what you can do is open the test which you want to run and change call to `it()` to be `it.only()`.

For example in `src/1-add-two/index.test.js`:

```diff
-it('addTwo()', function() {
+it.only('addTwo()', function() {
     assert.equal(addTwo(2), 4);
     assert.equal(addTwo(0), 2);
 });

```
That means only that test will run and you can focus on one thing at a time instead of starring at red the whole time ;)

Have fun & let me know if I can help. :muscle:
