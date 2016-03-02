var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var items = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[items] = value;
    items++;
  };

  someInstance.pop = function() {
    if (items >= 0) {
      item--;
      return storage[items];
    } else {
      // should an error be thrown if the stack is popped while empty
      return undefined;
    }

  };

  someInstance.size = function() {
    return items;
  };

  return someInstance;
};
