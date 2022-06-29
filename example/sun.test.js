const sum = require('./sum');
const power = require('./power')

test('power', () => {
  expect(power(2, 0)).toBe(1);
  expect(power(2, 2)).toBe(4);
  expect(power(2, 4)).toBe(16);
});


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});