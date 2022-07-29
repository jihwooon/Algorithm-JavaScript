class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTreeTest {
  constructor() {
    this.root = null;
  }
}


test('BinarySearchTreeTest', () => {
  let tree = new BinarySearchTreeTest();
  tree.root = new Node(10);
  tree.root.right = new Node(15);
  tree.root.left = new Node(7);
  tree.root.left.right = new Node(9);

  expect(tree.root.right).toEqual({"left": null, "right": null, "value": 15});
  expect(tree.root.left).toEqual({"left": null, "right": {"left": null, "right": null, "value": 9}, "value": 7});
  expect(tree.root.left.right).toEqual({"left": null, "right": null, "value": 9});
})
