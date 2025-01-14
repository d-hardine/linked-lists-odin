class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

const n1 = new Node(100)
console.log(n1)

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head)
    }
}