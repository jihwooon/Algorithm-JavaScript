const solution = (n) => {
  let answer = 0;

  if (n == 0 || n == 1) {
    return n;
  }
  if (n <= 2) {
    return 1;
  }

  return solution(n - 2) + solution(n - 1);
}


test('피보나치 수열', () => {
  expect(solution(0)).toEqual(0);
  expect(solution(1)).toEqual(1);
  expect(solution(2)).toEqual(1);
  expect(solution(3)).toEqual(2);
  expect(solution(4)).toEqual(3);

})

const fib_memo = (n, memo = [undefined, 1, 1]) => {

  if (memo[n] != undefined) {
    return memo[n];

  }

  if (n <= 2) {
    return 1;
  }

  let res = fib_memo(n - 2, memo) + fib_memo(n - 1, memo)
  memo[n] = res

  return res
}

test('메모이제이션', () => {
  expect(fib_memo(1)).toEqual(1);
  expect(fib_memo(2)).toEqual(1);
  expect(fib_memo(3)).toEqual(2);
  expect(fib_memo(4)).toEqual(3);
  expect(fib_memo(5)).toEqual(5);
})


const fib_table = (n) => {

  if (n <= 2) {
    return 1;
  }
  let fibNumber = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    fibNumber[i] = fibNumber[i - 1] + fibNumber[i - 2]
  }

  return fibNumber[n];
}

test('상향식 동적 프로그래밍', () => {
  expect(fib_table(1)).toEqual(1);
  expect(fib_table(2)).toEqual(1);
  expect(fib_table(3)).toEqual(2);
  expect(fib_table(4)).toEqual(3);
})