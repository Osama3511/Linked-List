const { LinkedList } = require('./LinkedList.js');

const list = LinkedList();

list.append(10);
list.append(20);
list.append(30);
console.log(list.toString()); // 10 -> 20 -> 30 -> null

list.prepend(5);
console.log(list.toString()); // 5 -> 10 -> 20 -> 30 -> null

list.insertAt(15, 2);
console.log(list.toString()); // 5 -> 10 -> 15 -> 20 -> 30 -> null

list.removeAt(2);
console.log(list.toString()); // 5 -> 10 -> 20 -> 30 -> null

list.removeLast();
console.log(list.toString()); // 5 -> 10 -> 20 -> null

console.log(list.contains(10)); // true
console.log(list.find(20)); // 2