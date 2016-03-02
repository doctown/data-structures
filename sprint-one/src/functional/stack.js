var Stack = function() {
  var someInstance = {};
  var stackSize = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {

    if (stackSize > 0) {
      var popped = someInstance[stackSize - 1];
      if (delete someInstance[stackSize - 1]) {
        stackSize--;
        return popped;
      }
    }
  };

  someInstance.size = function() {
    return stackSize;
  };

  return someInstance;
};
