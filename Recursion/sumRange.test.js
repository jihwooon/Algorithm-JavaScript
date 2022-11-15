function sumRange (num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

describe('sumRange', () => {
  it('더한다', () => {
    expect(sumRange(1)).toBe(1);
    expect(sumRange(2)).toBe(3);
    expect(sumRange(3)).toBe(6);
  });
});
