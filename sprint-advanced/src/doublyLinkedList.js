var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Add an item to the head of the list
  list.addToHead = function(value) {
    // Create a node
    var node = new Node(value);

    // Make the node.next point to this head and the previous point to the previous to null
    if (list.head == null && list.tail == null) {
      list.head = new Node(null);
      list.tail = new Node(null);
      list.tail.prev = node;
      list.head.next = list.tail;
    } else if (list.head.next === list.tail && list.tail.prev == list.head) {
      list.tail.prev = node;
    }

    // Point head to this node.
      node.next = list.head.next;
      node.prev = list.head;
      list.head.next = node;
  };

  list.addToTail = function(value) {
    var node = new Node(value);

    if (list.tail === null && list.head === null) {
      list.head = new Node(null);
      list.tail = new Node(null);
      list.head.next = node;
      list.tail.prev = list.head;
    } else if (list.head.next === list.tail && list.tail.prev == list.head) {
      list.head.next = node;
    }
    // Point the tail to this new node
    node.next = list.tail;
    node.prev = list.tail.prev;
    list.tail.prev = node;
  };

  // Remove the last node from the list and returns the value
  list.removeTail = function () {
    // if this is empty throw an error
    if (list.tail == null && list.head == null || list.head.next === list.tail && list.tail.prev === list.head) {
      throw new Error("Cannot delete from an empty linked list");
    }

    // Node equals the current tail
    var removalNode = list.tail.prev;
    // Result equals the value in the tail
    var removalValue = removalNode.value;

    // The tail is now equal to the prev node
    list.tail.prev = removalNode.prev;

    // Delete the tail node
    delete list[removalNode];
    // Return result
    return removalValue;
  };

  list.removeHead = function() {
    var node = list.head.next;
    list.head.next = node.next;

    var result = node.value;
    delete list[node];

    return result;
  };

  list.contains = function(target) {
    var cur = list.head.next;
    var found = false;

    while (found === false && cur !== list.tail) {
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
