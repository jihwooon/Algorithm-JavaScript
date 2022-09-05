function fibonacci (n) {

  if(n <= 2) {
    return 1
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

test('피보나치', () => {
  expect(fibonacci(5)).toEqual(5);
  expect(fibonacci(2)).toEqual(1);
})

//피보나치 메모이제이션
function fibonacci_memo (n, memo =[]) {
  if(memo[n] !== undefined) return memo[n]
  if(n <= 2) return 1;
  return memo[n] = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
}

test('피보나치 메모이제이션', () => {
  expect(fibonacci_memo(5, {})).toEqual(5);
  expect(fibonacci_memo(2, {})).toEqual(1);
  expect(fibonacci_memo(10, {})).toEqual(55);
})

//피보나치 타뷰렛
function fibonacci_tabulated(n) {
  if(n <= 2) return 1;
  let fibName = [0, 1, 1];
  for(let i = 3; i <= n; i++) fibName[i] = fibName [i - 1] + fibName[i - 2];

  return fibName[n];
}

test('피보나치 타뷰렛', () => {
  expect(fibonacci_tabulated(2)).toEqual(1);
  expect(fibonacci_tabulated(5)).toEqual(5);
  expect(fibonacci_tabulated(10)).toEqual(55);
  expect(fibonacci_tabulated(10000)).toEqual(Infinity);
})
