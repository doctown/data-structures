var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.stack = {};
};

Stack.prototype.push = function (value) {
  this.stack[this.stackSize] = value;
  this.stackSize++;  
};

Stack.prototype.pop = function () {
  if (this.stackSize > 0) {
    this.stackSize--;
    var result = this.stack[this.stackSize];
    delete this.stack[this.stackSize];
  }
  return result;
};

Stack.prototype.size = function () {
  return this.stackSize;
};



