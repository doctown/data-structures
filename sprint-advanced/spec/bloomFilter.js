describe('bloom-filter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter();
  });

  it('should return false for each item in an instantiated bloom filter', function() {
    var isAllFalse = true;

    bloomFilter.limitedArray.each(function (item, index, array) {
      if (item === true) {
        isAllFalse = false;
      }
    });

    expect(isAllFalse).to.equal(true);
  });


  it('should have methods named "insert" and "contains"', function() {
    expect(bloomFilter.insert).to.be.a('function');
    expect(bloomFilter.contains).to.be.a('function');
  });

  it('should return false when item is not in bloom filter', function() {
    expect(bloomFilter.contains('Jonas')).to.equal(false);
    // NOTE: The values below have been verified to not cause a false positive based on the hash function implmented
    bloomFilter.insert('David');
    expect(bloomFilter.contains('Jonas')).to.equal(false);
  });

  it('should return true when item is in bloom filter', function() {
    bloomFilter.insert('David');
    expect(bloomFilter.contains('David')).to.equal(true);
    bloomFilter.insert('Jonas');
    expect(bloomFilter.contains('Jonas')).to.equal(true);
    bloomFilter.insert('Mark');
    bloomFilter.insert('Phil');
    bloomFilter.insert('John');
    bloomFilter.insert('Fred');
    expect(bloomFilter.contains('David')).to.equal(true);
    expect(bloomFilter.contains('Phil')).to.equal(true);
    expect(bloomFilter.contains('Jonas')).to.equal(true);
  });

  it('should return false positive when the item is not in the bloom filter', function() {
    var falsePositive = 'Jack';
    var positive = 'Mark';
    
    bloomFilter.insert(positive);
    expect(bloomFilter.contains(falsePositive)).to.equal(true);
    falsePositive = 'Max';
    positive = 'Joe';
    bloomFilter.insert(positive);
    expect(bloomFilter.contains(falsePositive)).to.equal(true);
  });
});
