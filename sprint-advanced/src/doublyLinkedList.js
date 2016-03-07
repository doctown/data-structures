var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Add an item to the head of the list
  list.addToHead = function(value) {
    // If head is null
    if (list.head == null && list.tail == null) {
      list.head = new Node(value);
      list.tail = list.head;
    } else {
      list.head.prev = new Node(value);
      list.head.prev.next = list.head;
      list.head = list.head.prev;
    }
  };

  list.addToTail = function(value) {
    if (list.tail === null && list.head === null) { // linked list is empty
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
    if (list.tail === null) {
      return undefined;
    }

    // Create a node to store the current tail
    var nodeToRemove = list.tail;
    // Create a result to hold the node to be removed
    var returnValue = nodeToRemove.value;

    // Assign the tail to the new node
    list.tail = nodeToRemove.prev;

    // If the tail equals null
    if (list.tail == null) {
      // Then the head = null
      list.head = null;
    } else { // Assign the tail next to null
      list.tail.next = null;
      if (list.tail === list.head) {
        list.head.next = null;
      }
    }

    // Delete the node
    delete list[nodeToRemove];

    // Return the result
    return returnValue;
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
      if (list.head === list.tail) {
        list.tail.prev = null;
      }
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
