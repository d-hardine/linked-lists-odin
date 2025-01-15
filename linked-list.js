export class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

export class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    //insert first node
    prepend(data) {
        this.head = new Node(data, this.head)
        this.size++
    }

    //print list data
    printListData() {
        let current = this.head

        while(current) {
            console.log(current.data)
            current = current.next
        }
        console.log(`data size: ${this.size}`)
    }

    //insert last node
    append(data) {
        let node = new Node(data)
        let current

        //if empty, make head
        if(!this.head) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    //insert at index
    insertAt(data, index) {
        if(index < 0 || index > this.size - 1) { //if index out of range
            return
        } else { //the insertion program
            const node = new Node(data)
            let current, previous

            //set current to first
            current = this.head
            let count = 0

            while(count < index) {
                previous = current
                count++
                current = current.next
            }

            node.next = current
            previous.next = node

            this.size++
        }
    }

    //return data size
    dataSize() {
        console.log(`data size: ${this.size}`)
        return this.size
    }

    //return data head
    dataHead() {
        console.log(`data head: ${this.head.data}`)
        return this.head.data
    }

    //return data tail
    dataTail() {
        let current = this.head

        while(current) {
            if(!current.next) {
                return current.data
            }
            else {
                current = current.next
            }
        }
    }

    //returns the node at the given index
    at(index) {
        if(index < 0 || index > this.size - 1) { //if index out of range
            return
        } else {
            let current = this.head
            let count = 0

            while(count < index) {
                current = current.next
                count++
            }
            console.log(`data from index ${index} is: ${current.data}`)
            return current.data
        }
    }

    //removes the node at the given index
    removeAt(index) {
        let current = this.head
        let previous
        let count = 0

        if(index < 0 || index > this.size - 1) { //if index out of range
            return
        } else if(index === 0) {
            this.head = current.next
        } else {
            while(count < index) {
                previous = current
                count++
                current = current.next
            }
            previous.next = current.next
            this.size--
        }
    }

    //removes the last element from the list
    pop() {
        this.removeAt(this.size - 1)
    }

    //returns true if the passed in value is in the list and otherwise returns false.
    contains(data) {
        let current = this.head
        while(current) {
            if(current.data === data)
                return true
            current = current.next
        }
        return false //no value found in the linked list
    }

    //returns the index of the node containing value, or null if not found.
    find(data) {
        let current = this.head
        let count = 0
        while(current) {
            if(current.data === data) {
                return count
            }
                else {
                current = current.next
                count++    
            }
        }
        return null //no value found in the linked list
    }

    //convert linked list object to string
    toString() {
        let current = this.head
        let cache = []
        let theString = ''
        while(current) {
            cache.push(current.data)
            current = current.next
        }
        for(let i=0;i < cache.length; i++) {
            theString = theString + `( ${cache[i]} ) -> `
        }
        theString = theString + 'null'
        return theString
    }
}