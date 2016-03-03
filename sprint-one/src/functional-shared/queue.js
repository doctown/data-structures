var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.queue = {};
  obj.queueSize = 0;
  obj.insertIndex = 0;
  obj.removeIndex = 0;

  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
};

queueMethods.enqueue = function(value) {
  this.queue[this.insertIndex] = value;
  this.insertIndex++;
};

queueMethods.dequeue = function() {
  if (this.size() > 0) {
    var result = this.queue[this.removeIndex];
    delete this.queue[this.removeIndex];
    this.removeIndex++;
    return result;
  }
};

queueMethods.size = function() {
  return this.insertIndex - this.removeIndex;
};
