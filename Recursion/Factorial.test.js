function factorial(num) {

  if(num < 0) {
    return 0;
  }

  if(num <= 1) {
    return 1;
  }

  return num * factorial(num -1);
}


test('test', () => {

  expect(factorial(1)).toBe(1);
  expect(factorial(2)).toBe(2);
  expect(factorial(4)).toBe(24);
  expect(factorial(5)).toBe(120);
})