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

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root = null) return false;
    let current = this.root, found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return undefined;
    return current;
  }
}


test('이진 검색 트리: Insert 메서드 솔루션', () => {
  let tree = new BinarySearchTreeTest();
  tree.insert(10);
  tree.insert(5);
  tree.insert(2);
  tree.insert(13);
  tree.insert(16);
  tree.insert(7);
  tree.insert(1);

  expect(tree.insert(10)).toBeUndefined();

  expect(tree).toEqual({
    "root": {
      "left": {
        "left": {
          "left": {
            "left": null,
            "right": null,
            "value": 1
          },
          "right": null,
          "value": 2
        },
        "right": {
          "left": null,
          "right": null,
          "value": 7
        },
        "value": 5
      },
      "right": {
        "left": null,
        "right": {
          "left": null,
          "right": null,
          "value": 16
        },
        "value": 13
      },
      "value": 10
    }
  });
})

test('이진 검색 트리 find 메서드 솔류션', () => {
  let tree2 = new BinarySearchTreeTest();
  tree2.insert(10);
  tree2.insert(3);
  tree2.insert(2);
  tree2.insert(13);

  //        10
  //   3          13
  // 2
  expect(tree2).toEqual({
    "root":{
      "left":{
        "left":{
          "left":null,
          "right":null,
          "value":2
        },
        "right":null,
        "value":3
      },
      "right":{
        "left":null,
        "right":null,
        "value":13
      },
      "value":10
    }
  })

  expect(tree2.find(100)).toBeUndefined()
  expect(tree2.find(3)).toBeUndefined()

})