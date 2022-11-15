function countDownMinus(num) {
  return num - 1;
}

function countDownTest(num) {
  let total = 0;
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
  return total;
}

function countDown(num) {
  if(num <= 0) {
    console.log("All doen!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

test('function',() => {
  expect(countDownTest(1)).toBe(0);
});


test('countDownMinus',() => {
  expect(countDownMinus(1)).toBe(0);
  expect(countDownMinus(2)).toBe(1);
  expect(countDownMinus(3)).toBe(2);
});

test('countDown', () => {
  expect(countDown(1)).toBe(5);
})
