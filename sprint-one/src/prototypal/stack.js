var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj.stackSize = 0;
  obj.stack = {};

  return obj;
};

var stackMethods = {};

stackMethods.push = function(item) {
  this.stack[this.stackSize] = item;
  this.stackSize++;
};

stackMethods.pop = function() {
  if ( this.stackSize > 0 ) {
    this.stackSize--;
    var poppedItem = this.stack[this.stackSize];
    delete this.stack[this.stackSize];
    return poppedItem;
  }
};

stackMethods.size = function() {
  return this.stackSize;
};
