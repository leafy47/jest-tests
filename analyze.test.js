const analyze = require('./analyze');

test('Should return an object with average, min, max, and length of an array', () => {
    expect(analyze([1,8,3,4,2,6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
})