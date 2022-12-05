class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

const list = new SinglyLinkedList();
console.log(list.push('Hello'));
console.log(list.push('My'));
console.log(list.push('Name'));
console.log(list.push('is'));

// const first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

// describe('SinglyLinkedList 클래스는',() => {
//     const list = new SinglyLinkedList();
//     it('push 메서드에 ', () => {
//     expect(list.push('Hello')).toBe({"head": {"next": null, "val": "Hello"}, "length": 1, "tail": {"next": null, "val": "Hello"}});
//    }); 
// });