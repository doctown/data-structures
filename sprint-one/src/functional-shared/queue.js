var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.queue = {};
  obj.queueSize = 0;

  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;

  return obj;
};

var queueMethods = {
};

queueMethods.enqueue = function(value) {
  this.queue[this.queueSize] = value;
  this.queueSize++;
};

queueMethods.dequeue = function() {

};

queueMethods.size = function() {
  return this.queueSize;
};
