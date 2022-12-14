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

    push(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if(this.length === 0) return undefined;
        let oldHead = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.head = oldHead.next;
        this.head.prev = null;
        this.length--;
        return oldHead;
    }

    unshift(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 | index >= this.length) return null;
        if(index <= this.length/2) {
            let count = 0;
            let current = this.head;
            while (count != index) {
            current = current.next;
            count++;
        }
        return current;
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while(count !== index) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
}

let list = new DoublyLinkedList();

list.push(100);
list.push(200);
list.unshift(300);
console.log(list);
