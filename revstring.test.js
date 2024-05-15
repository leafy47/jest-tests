const revstring = require('./revstring');

test('Gives a reversed string', () => {
    expect(revstring('reverse time')).toMatch(/emit esrever/);
})