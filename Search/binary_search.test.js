const binary_search = require('./binary_search')
const linear_search = require('./linear_search')


test('binary_search', () => {
  expect(binary_search([1,2,3,4,5],4)).toBe(3);
  expect(binary_search([1,2,3,4,5],6)).toBe(-1);
});

test('linear_search', () => {
  expect(linear_search([1,3,4,6,7], 3)).toBe(1);
})