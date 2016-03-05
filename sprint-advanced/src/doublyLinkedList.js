var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null && list.head === null) {
      list.tail = new Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = new Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var node = list.head;
    list.head = node.next;

    var result = node.value;
    delete node;

    if (list.head === null) {
      list.tail = null;
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

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail & removeHead are O(1)
 * contains is O(n)
 */
