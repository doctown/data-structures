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
  };

  someInstance.size = function() {
    return queueSize;
  };

  return someInstance;
};
