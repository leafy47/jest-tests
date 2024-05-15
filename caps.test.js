const caps = require('./caps');

test('capitalize first character of a string', () => {
    expect(caps('this is going to work')).toMatch(/This is going to work/);
})