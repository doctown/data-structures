var BloomFilter = function () {
  this.capacity = 18;
  this.limitedArray = new LimitedArray (this.capacity);
  for (var i = 0; i < this.capacity; i++) {
    this.limitedArray.set(i, false);
  } 


};

BloomFilter.prototype.insert = function (value) {
  // store each hash function in a variable
    // call the hash
  var that = this;

  hashFunctions.forEach(function (iterator) { // for each hash function
    // set the limitedArray at the index of the resulted hash value to true

    that.limitedArray.set(iterator(value, that.capacity), true);
  });
};

BloomFilter.prototype.contains = function(value) {
  var isFound = false;
  var that = this;

  // loop through each hash function 
  hashFunctions.forEach(function (iterator) {
    // get the index of the hash value
      // if any return true, return true
    if (that.limitedArray.get(iterator(value, that.capacity))) {
      isFound = true;
    }
  });

  return isFound;
};