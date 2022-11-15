function reverse(str) {

  if (str.length <= 1) {
    return str;
  }

  return reverse(str.slice(1)) + str[0];

}

describe('reverse 함수', () => {
  it('글자를 뒤집는다.', () => {
    // expect(reverse('awesome')).toBe('emosewa');
    expect(reverse('ab')).toBe('ba');
  });
});
