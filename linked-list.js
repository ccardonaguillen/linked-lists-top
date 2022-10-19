class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        // Init pointer at HEAD of list
        let pointer = this.head;

        // If list is empty, create first node
        if (!pointer) return (this.head = new Node(value));

        // Get node at tail and append new node, increasing the size by 1
        this.getTail().next = new Node(value);
        this.size += 1;
    }

    prepend(value) {
        // Add new Node at the start and set current head and next Node
        this.head = new Node(value, this.head);
        this.size += 1;
    }

    getTail = () => {
        let pointer = this.head;
        // Traverse the list until the pointer has no next Node
        while (pointer.next) {
            pointer = pointer.next;
        }

        // Return last node
        return pointer;
    };

    at(index) {
        // Check is index in out of bounds. If so return null
        if (index > this.size - 1) return null;

        let pointer = this.head;

        // Traverse list one node at a time until reaching the desired index
        for (let i = 0; i < index; i++) {
            pointer = pointer.next;
        }

        return pointer;
    }

    pop() {
        // Search for second to last node and set next (last element) as null
        const secondToLast = this.at(this.size - 2);
        secondToLast.next = null;
    }

    contains(val) {
        let pointer = this.head;

        // Traverse list until one match is found, then return true
        while (pointer) {
            if (pointer.value == val) return true;
            pointer = pointer.next;
        }

        // If no match is found return false
        return false;
    }

    find(val) {
        let pointer = this.head;

        for (let i = 0; i <= this.size; i++) {
            if (pointer.value == val) return i;
            pointer = pointer.next;
        }

        return null;
    }

    toString() {
        let pointer = this.head;
        let string = '';

        while (pointer) {
            string += `( ${pointer.value} ) -> `;
            pointer = pointer.next;
        }

        string += 'null';

        return string;
    }

    insertAt(value, index) {
        const previous = this.at(index - 1);
        previous.next = new Node(value, previous.next);
        this.size += 1;
    }

    removeAt(index) {
        const previous = this.at(index - 1);
        previous.next = previous.next.next;
        this.size -= 1;
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

let linked = new LinkedList();
linked.append('1');
linked.append('2');
linked.prepend('3');
linked.append('4');

console.log(linked.toString());
console.log(linked.size);
// console.log(linked.getHead());
console.log(linked.getTail());
console.log(linked.at(2));
console.log(linked.contains(5));
console.log(linked.find(1));

linked.pop();
console.log(linked.toString());

linked.insertAt('5', 2);
console.log(linked.toString());

linked.removeAt(1);
console.log(linked.toString());
