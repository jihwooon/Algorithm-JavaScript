class Tree {
  value;

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new Tree();
      }

      this.left.insert(value);
      return;
    }

    if (value > this.value) {
      if (!this.right) {
        this.right = new Tree();
      }

      this.right.insert(value);
      return;
    }

    this.value = value;
  }

  search(value) {
    if (value === this.value) {
      return true;
    }

    if (value < this.value) {
      if (!this.left) {
        return false;
      }

      return this.left.search(value);
    }

    if (!this.right) {
      return false;
    }

    return this.right.search(value);
  }

  traverseInorder(callback) {
    if (this.left) {
      this.left.traverseInorder(callback);
    }

    callback(this);

    if (this.right) {
      this.right.traverseInorder(callback);
    }
  }

  traversePreorder(callback) {
    callback(this);

    if (this.left) {
      this.left.traverseInorder(callback);
    }

    if (this.right) {
      this.right.traverseInorder(callback);
    }
  }

  traversePostorder(callback) {
    if (this.left) {
      this.left.traverseInorder(callback);
    }

    if (this.right) {
      this.right.traverseInorder(callback);
    }

    callback(this);
  }

  delete(value, parent) {
    if (value < this.value) {
      this.left.delete(value, this);
      return;
    }

    if (value > this.value) {
      this.right.delete(value, this);
      return;
    }

    // 오른쪽으로 왔다
    if (value > parent.value) {
      if (this.left) {
        parent.right = this.left;
        return;
      }

      if (this.right) {
        parent.right = this.right;
        return;
      }

      parent.right = null;
      // 왼쪽으로 왔다.
    } else {
      if (this.left && this.right) {
        const successor = this.right.getSuccessor(this);
        successor.left = this.left;
        successor.right = this.right;
        parent.left = successor;
        return;
      }


      if (this.left) {
        parent.left = this.left;
        return;
      }

      if (this.right) {
        parent.left = this.right;
        return;
      }
      parent.left = null;
    }
  }

  getSuccessor(parent) {
    if (this.left) {
      return this.left.getSuccessor(this);
    }

    parent.left = null;
    return this;
  }
}

describe('tree', () => {
  describe('insert', () => {
    it('updates root value with', () => {
      const tree = new Tree();
      tree.insert(5);

      expect(tree.value).toBe(5);
    });

    describe('when inserts to child', () => {
      it('creates child node', () => {
        const tree = new Tree();
        tree.insert(5);
        tree.insert(3);

        expect(tree.value).toBe(5);
        expect(tree.left.value).toBe(3);

        tree.insert(8);

        expect(tree.right.value).toBe(8);
      });
    });
  });

  describe('search', () => {
    describe('when given value exists in tree', () => {
      it('returns true', () => {
        const tree = new Tree();
        tree.insert(5);

        expect(tree.search(5)).toBe(true);

        tree.insert(3);

        expect(tree.search(3)).toBe(true);

        tree.insert(8);

        expect(tree.search(8)).toBe(true);

        tree.insert(3);
        tree.insert(4);
        tree.insert(7);
        tree.insert(9);

        expect(tree.search(3)).toBe(true);
        expect(tree.search(4)).toBe(true);
        expect(tree.search(7)).toBe(true);
        expect(tree.search(9)).toBe(true);
      });
    });

    describe('when given value does not exists in tree', () => {
      it('returns true', () => {
        const tree = new Tree();
        tree.insert(5);

        expect(tree.search(1)).toBe(false);
      });
    });
  });

  describe('traverseInorder', () => {
    it('traverses in order', () => {
      const tree = new Tree();
      tree.insert(5);
      tree.insert(3);
      tree.insert(7);
      tree.insert(1);
      tree.insert(4);
      tree.insert(8);
      tree.insert(9);

      // tree.traverseInorder(node => {
      //   console.log(node.value);
      // });

      // tree.traversePreorder(node => {
      //   console.log(node.value);
      // });

      // tree.traversePostorder(node => {
      //   console.log(node.value);
      // });
    });
  });

  describe('delete', () => {
    describe('when node has no child', () => {
      it('deletes node only', () => {
        const tree = new Tree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(8);

        tree.delete(3);

        expect(tree.search(3)).toBe(false);

        tree.delete(8);

        expect(tree.search(8)).toBe(false);
      });
    });

    describe('when has only one child', () => {
      it('deletes node', () => {
        const tree = new Tree();
        tree.insert(5);
        tree.insert(3);
        tree.insert(8);
        tree.insert(1);

        tree.delete(3);

        expect(tree.search(3)).toBe(false);
        expect(tree.search(1)).toBe(true);

        tree.insert(3);

        tree.delete(1);

        expect(tree.search(1)).toBe(false);
        expect(tree.search(3)).toBe(true);

        tree.insert(7);
        tree.delete(8);

        expect(tree.search(8)).toBe(false);
        expect(tree.search(7)).toBe(true);
      });
    });

    describe.only('when node has both child', () => {
      it('deletes node', () => {
        const log = jest.fn();
        const tree = new Tree();
        tree.insert(10);
        tree.insert(5);
        tree.insert(1);
        tree.insert(7);
        tree.insert(6);

        tree.delete(5);

        tree.traverseInorder(node => {
          log(node.value);
        });

        expect(log.mock.calls.map(it => it[0])).toEqual([1, 6, 7, 10]);
      });
    });
  });

});
