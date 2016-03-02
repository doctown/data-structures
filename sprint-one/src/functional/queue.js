var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueSize = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[queueSize] = value;
    queueSize++;
  };

  someInstance.dequeue = function() {
    if (queueSize > 0) {
      var result = storage[0];
      // shift queue
      for (var i = 0; i < queueSize - 1; i++) {
        storage[i] = storage[i + 1];  
      }
      queueSize--;
      delete storage[queueSize];

      return result;
    }
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
