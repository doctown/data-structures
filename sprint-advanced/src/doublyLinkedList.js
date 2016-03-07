var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Add an item to the head of the list
  list.addToHead = function(value) {
    // Create a node
    var node = new Node(value);
    // Make the node.next point to this head and the previous point to the previous to null
    node.next = list.head;

    // Point head to this node.
    list.head = node;
  };

  list.addToTail = function(value) {
    if (list.tail === null && list.head === null) {
      list.tail = new Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = new Node(value);
      list.tail.next.prev = list.tail;
      list.tail = list.tail.next;
    }
  };

  // Remove the last node from the list and returns the value
  list.removeTail = function () {

  };

  list.removeHead = function() {
    var node = list.head;
    list.head = node.next;

    var result = node.value;
    delete list[node];

    if (list.head === null) {
      list.tail = null;
    } else {
      list.head.prev = null;
    }
    return result;
  };

  list.contains = function(target) {
    var cur = list.head;
    var found = false;

    while (found === false && cur !== null) {
      if (cur.value === target) {
        found = true;
      } else {
        cur = cur.next;
      }
    }
    return found;
  };

  return list;
};
/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail & removeHead are O(1)
 * contains is O(n)
 */

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
