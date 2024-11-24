function Node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;
}

function LinkedList() {
  let head = null;
  let tail = null;

  function append(value) {
    let node = new Node(value);

    if (!head) {
      head = node;
      tail = node;
      return;
    }

    tail.nextNode = node;
    tail = node;
  }

  function prepend(value) {
    let node = new Node(value);

    if (!head) {
      head = node;
      tail = node;
      return;
    }

    node.nextNode = head;
    head = node;
  }

  function toString() {
    let cur = head;
    let str = "";

    while (cur) {
      str += `${cur.value} -> `;
      cur = cur.nextNode;
    }

    return str + `null`;
  }

  function size() {
    let cur = head;
    let size = 0;

    while (cur) {
      size++;
      cur = cur.nextNode;
    }

    return size;
  }

  function listTail() {
    return tail.value;
  }

  function listHead() {
    return head.value;
  }

  function at(index) {
    if(index < 0 || index >= size()) return;
    let cur = head;
    let i = 0;

    while (cur) {
      if (i === index) return cur.value;

      cur = cur.nextNode;
      i++;
    }

    return null;
  }

  function removeLast() {

    if(!head) return;

    if(head === tail) {
        head = null;
        tail = null;
        return;
    }

    let cur = head;

    while (cur.nextNode !== tail) {
      cur = cur.nextNode;
    }

    cur.nextNode = null;
    tail = cur;
  }

  function contains(value) {
    let cur = head;

    while (cur) {
      if (cur.value === value) return true;

      cur = cur.nextNode;
    }

    return false;
  }

  function find(value) {
    let cur = head;
    let index = 0;

    while (cur) {
      if (cur.value == value) return index;

      cur = cur.nextNode;
      index++;
    }

    return null;
  }

  function insertAt(data, index) {
    if (index < 0 || index > size()) return;

    let cur = head;

    if(index === 0) {
        prepend(data);
        return;
    }

    let i = 0;
    while (cur && i < index - 1) { 
      cur = cur.nextNode;
      i++;
    }

    if (!cur) return;

    let node = new Node(data);

    node.nextNode = cur.nextNode;
    cur.nextNode = node;
  }

  function removeAt(index) {
    if(index < 0 || index >= size()) return;

    if(!head) return;

    if (index === 0) {
      head = head.nextNode;
      if(!head) tail = null;
      return;
    }

    let cur = head;
    let i = 0;
    while (cur && i < index - 1) {
      cur = cur.nextNode;
      i++;
    }

    if (!cur || !cur.nextNode) return;

    cur.nextNode = cur.nextNode.nextNode;

    if (!cur.nextNode) tail = cur;
  }

  return {
    append,
    prepend,
    size,
    listHead,
    listTail,
    at,
    removeLast,
    contains,
    find,
    insertAt,
    removeAt,
    toString,
  };
}

module.exports = { LinkedList }