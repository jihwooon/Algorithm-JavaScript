function countDown(num) {

  if(num <= 0 ) {
    return 0;
  }

  num--;
  countDown(num);
}

describe('countDown 함수', () => {
  it('num를 출력한다.', () => {
    expect(countDown(-1)).toBe(0);
  });
});
