// power(2,0) 1
// power(2,2) 4
// power(2,4) 16

function power(x,y) {
  if(y === 0) return 1;
  return x * power(x, y - 1);
};


describe('power', () => {
  it('곱한다', () => {
    expect(power(2,0)).toBe(1);
  });
});

