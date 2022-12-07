class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value);
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
    
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head == null;
            this.tail == null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail == null;
        }
        return currentHead;
    }

    unshift(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
}

// const list = new SinglyLinkedList();
// console.log(list.push('Hello'));
// console.log(list.push('My'));
// // console.log(list.push('Name'));
// // console.log(list.push('is'));
// // console.log(list.pop());
// // console.log(list.shift());
// // console.log(list.unshift('is'));
// // console.log(list);

// const newLocal = new Node("Hi");
// const newLocal1 = new Node("Hello");
// const newLocal2 = new Node("My");
// // console.log(newLocal.next);
// newLocal.next = newLocal1;
// newLocal.next.next = newLocal2;

// // console.log(newLocal);