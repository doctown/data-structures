var BloomFilter = function () {
  var initialSize = 18;
  this.limitedArray = new LimitedArray(initialSize);
  for (var i = 0; i < initialSize; i++) {
    this.limitedArray.set(i, false);
  } 


};

BloomFilter.prototype.insert = function (value) {
  // 
};

BloomFilter.prototype.contains = function(value) {

};