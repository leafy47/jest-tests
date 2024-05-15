const calculator = require('./calc');

// const josh = new calculator();

test('Add 2 numbers', () => {
    expect(calculator().add(1, 2)).toBe(3);
})

test('Subtracts the second number from the first', () => {
    expect(calculator().subtract(3, 1)).toBe(2);
})

test('Multiplies 2 numbers', () => {
    expect(calculator().multiply(3, 2)).toBe(6);
})

test('Divides 1st number by 2nd number', () => {
    expect(calculator().divide(6, 2)).toBe(3);
})
