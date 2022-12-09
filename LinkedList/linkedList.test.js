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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        const foundNode = this.get(index);
        if(foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(value);
        if(index === 0) return this.unshift(value);
        let newNode = new Node(value);
        let prev = this.get(index - 1);
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}

const list = new SinglyLinkedList();
console.log(list.push('Hello'));
console.log(list.push('My'));
console.log(list.get(0));
console.log(list.set(1,'Change'));
console.log(list);
console.log(list.insert(0,'first'));
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