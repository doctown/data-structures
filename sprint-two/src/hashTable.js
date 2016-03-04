var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Key-value pairs are stored in an array and added as pair to the array if it exists
  if (this._storage.get(index) === undefined) {
    var stored = [];
    stored.push(k);
    stored.push(v);
    this._storage.set(index, stored);  
  } else {
    var stored = this._storage.get(index);
    var isFound = false;

    for (var i = 0; i < stored.length; i += 2) {
      if (stored[i] === k) {
        stored[i + 1] = v;
        isFound = true;
      }
    }
    
    if (!isFound) {
      stored.push(k);
      stored.push(v);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var stored = this._storage.get(index);
  var retVal = undefined;

  for (var i = 0; i < stored.length; i += 2) {
    if (stored[i] === k) {
      retVal = stored[i + 1];
    }
  }

  return retVal;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var stored = this._storage.get(index);
  var retVal = undefined;
  
  for (var i = 0; i < stored.length; i += 2) {
    if (stored[i] === k) {
      retVal = stored[i + 1];
      stored.splice(i, 2);
    }
  }

  return retVal;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

  // instert: O(1)
  // retrieve: O(1)
  // remove: O(1)
