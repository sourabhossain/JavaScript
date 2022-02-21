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
        this.length++;
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

    delete(value) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return this;
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode) {
            if (currentNode.value === value) {
                previousNode.next = currentNode.next;
                this.length--;
                return this;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return this;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        this.head = this.head.next;
        this.length--;
        return this;
    }

    deleteTail() {
        if (!this.head) {
            return null;
        }

        if (!this.head.next) {
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.next) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        this.tail = previousNode;
        previousNode.next = null;
        this.length--;

        return this;
    }

    reverse() {
        let node = this.head;
        let previousNode = null;
        let nextNode = null;

        while (node) {
            nextNode = node.next;
            node.next = previousNode;
            previousNode = node;
            node = nextNode;
        }

        this.head = previousNode;
        return this;
    }

    __reverseRecursively(node) {
        if (!node || !node.next) {
            this.head = node;
            return node;
        }

        const nextNode = this.__reverseRecursively(node.next);
        nextNode.next = node;
        node.next = null;
        return node;
    }

    reverseRecursively() {
        this.tail = this.head;
        this.__reverseRecursively(this.head);
    }

    find(value) {
        let node = this.head;

        while (node) {
            if (node.value === value) {
                return node;
            }

            node = node.next;
        }

        return null;
    }

    fromArray(values) {
        values.forEach(value => {
            this.append(value);
        });

        return this;
    }

    toArray() {
        const values = [];
        let node = this.head;

        while (node) {
            values.push(node.value);
            node = node.next;
        }

        return values;
    }

    size() {
        return this.length;
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

node.delete(2);
node.deleteHead();
node.deleteTail();

node.print();
console.log(node.toArray());