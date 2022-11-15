function binary_search(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while(arr[mid] != target && start <= end) {

    target < mid ? end = mid - 1 : start = mid + 1;

    mid = Math.floor((start + end) / 2);
  }

  return arr[mid] === target ? mid : -1;
}


test('binary_search', () => {
  expect(binary_search([1,2,3,4,5],4)).toBe(3);
  expect(binary_search([1,2,3,4,5],6)).toBe(-1);
});

