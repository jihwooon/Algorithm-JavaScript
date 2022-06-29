const same = require('./same');

test('same : ', () => {
  expect(same([1,2,3,2], [9,1,4,4])).toBe(true);
  expect(same([1,2,3,2], [9,2,3,4])).toBe(false);
});