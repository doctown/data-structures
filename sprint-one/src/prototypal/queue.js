var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.enqueueCount = 0;
  obj.dequeueCount = 0;
  obj.queue = {};
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(item) {
  this.queue[this.enqueueCount] = item;
  this.enqueueCount++;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var item = this.queue[this.dequeueCount];
    delete this.queue[this.dequeueCount];
    this.dequeueCount++;
    return item;
  }
};

queueMethods.size = function() {
  return this.enqueueCount - this.dequeueCount;
};
