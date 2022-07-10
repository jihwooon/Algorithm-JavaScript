const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
const arrayNumbers = [numbers, 4];


test('numbers',() => {
  expect(numbers).toEqual([1,2,3]);
  expect(newNumbers).toEqual([1,2,3,4]);
  expect(arrayNumbers).toEqual([[1,2,3],4]);
})