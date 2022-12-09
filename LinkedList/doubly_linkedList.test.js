class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

let newNode1 = new Node('first');
let newNode2 = new Node('second');
let newNode3 = new Node('thoerd');
newNode1;
newNode1.next = newNode2;
newNode1.next.next = newNode3;

console.log(newNode1);
