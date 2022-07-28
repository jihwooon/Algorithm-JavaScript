class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

describe("class Test", () => {
  const first  = new Node("Hi");

  test('defines setReule()', () => {
    expect(typeof first.next).toBe("Hi");
  })
})
