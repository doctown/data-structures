var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.queue = {};
  this.insertIndex = 0;
  this.removeIndex = 0;
};

Queue.prototype.enqueue = function(item) {
  this.queue[this.insertIndex] = item;
  this.insertIndex++;
};

Queue.prototype.dequeue = function () {
  if (this.size() > 0) {
    var result = this.queue[this.removeIndex];
    delete this.queue[this.removeIndex];
    this.removeIndex++;
    return result;
  }
};

Queue.prototype.size = function () {
  return this.insertIndex - this.removeIndex;
};
