const cipher = require('./cipher');

test('Shift a strings characters by the shift factor', () => {
    expect(cipher('bard', 2)).toMatch(/dctf/);
})

test('Shift a strings characters by the shift factor', () => {
    expect(cipher('bard, zoo', 2)).toMatch(/dctf, bqq/);
})