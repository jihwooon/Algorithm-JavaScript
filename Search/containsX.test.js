function containsX(string) {

  for (let i = 0; i < string.length; i++) {
    if (string[i] == "X") {
      return true;
    }
  }
  return false;
}

test('containsX', () => {
  expect(containsX("SSGAX")).toBe(true);
  expect(containsX("SSGAS")).toBe(false);
})