import { Node, LinkedList } from "./linked-list.js"

//const ll = new LinkedList()
//ll.insertFirst(10)
//ll.insertLast(22)
//ll.insertLast(36)
//ll.insertLast(49)
//ll.insertLast(51)
//ll.insertAt(30,3)
//ll.pop()
//console.log(ll.contains(30))
//console.log(ll.find(76))

//ll.printListData()

//ll.toString()

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())