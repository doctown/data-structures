

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    var obj = {};
    obj[k] = v;
    this._storage.set(index, obj);  
  } else {
    var obj = this._storage.get(index);
    obj[k] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index);
  return obj[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj = this._storage.get(index);
  var res = obj[k];
  delete obj[k];

  return res;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

  // instert: O(1)
  // retrieve: O(1)
  // remove: O(1)
