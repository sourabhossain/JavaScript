class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;
        this.length++;

        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    append(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        return this;
    }

    insert(value, index) {
        if (index < 1) {
            return this.prepend(value);
        }

        if (index >= this.length) {
            return this.append(value);
        }

        const node = new Node(value);
        let currentNode = this.head;
        let previousNode = null;

        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = node;
        node.next = currentNode;
        this.length++;

        return this;
    }

    print() {
        let node = this.head;

        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }
}

const node = new LinkedList();

node.prepend(1);
node.prepend(2);
node.prepend(3);
node.append(4);
node.append(5);

node.insert(6, -10);

node.print();