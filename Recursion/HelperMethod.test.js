function collectionOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length == 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {

      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))

  }

  helper(arr)

  return result;

}

function collectOddValue(arr) {
  let result = [];

  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 != 0) {
    result.push(arr[0]);
  }

  result = result.concat(collectOddValue(arr.slice(1)));

  return result;
}

test('test', () => {

  // expect(collectionOddValues([1, 2, 3, 4, 5])).toStrictEqual([1, 3, 5]);
  // expect(collectionOddValues([6, 7, 8, 9, 10])).toStrictEqual([7, 9]);
  expect(collectOddValue([1, 2, 3, 4, 5])).toStrictEqual([1, 3, 5]);
  // expect(collectOddValue([6, 7, 8, 9, 10])).toStrictEqual([7, 9]);


})