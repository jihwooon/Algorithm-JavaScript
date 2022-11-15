// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(number, square) {
  if (square == 0) return 1;
  return number * power(number, square - 1)
}


test('power', () => {
  expect(power(2, 0).toBe(1))
});