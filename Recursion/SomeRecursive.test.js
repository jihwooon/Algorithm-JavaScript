/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 * */
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;

  return someRecursive(array.slice(1), callback);
}
//
// function someRecursive(array, callback) {
//   if (array.length === 0) return false;
//   if (callback(array[0])) return true;
//   return someRecursive(array.slice(1), callback);
// }

describe('someRecursive', () => {
  it('true로 반환한다.', () => {
    expect(someRecursive([1, 2, 3, 4], val => val % 2 !== 0)).toBe(true);
    expect(someRecursive([4, 6, 8, 9], val => val % 2 !== 0)).toBe(true);
    expect(someRecursive([4, 6, 8], val => val % 2 !== 0)).toBe(false);
  });
});