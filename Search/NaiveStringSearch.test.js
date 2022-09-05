/**
 * 계획
 * 1. 긴 문자열을 반복하는 루프를 작성합니다.
 * 2. 짧은 문자열을 반복하는 루프를 작성합니다.
 * 3. 문자가 일치 하지 않으면 벗어납니다.
 * 4. 문자가 일치하면 넘어갑니다.
 * 5. 내부 루프가 완료가 되면 count를 증가 시키고 반환합니다.
 * 6. 일치 하지 않은 문자열이면 count은 0입니다.
 * */

function naiveStringSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      console.log(short[j]);
      if (j === short.length - 1) count++;
      // console.log(j, short.length - 1);
    }
  }
  return count;
}

function naiveStringSearch1(long) {
  let count = "";

  if(long.length == 0) {
    return long;
  }

  return naiveStringSearch1(long.substring(1));
}

test('Naive String Search', () => {
  // expect(naiveStringSearch("loled", "lol")).toEqual(1);
  expect(naiveStringSearch1("loled")).toEqual(0);
})