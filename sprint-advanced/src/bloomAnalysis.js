
$(document).ready(function() {
  var getRandomNumber = function(length) {
    return Math.floor(Math.random() * length);
  };

  var bloomFilter = new BloomFilter();
  //create an array of names to add to the filter
  var names = ['David', 'Mark', 'John', 'Joe', 'Jack', 'Max', 'Mike', 'Jonas', 'Cassandra', 'Mark', 'Don', 'Jake', 'Adam'];

  for (var i = 0; i < 10000; i++) {
    var str = '';
    for (var k = 0; k < 10; k++) {
      str += String.fromCharCode(getRandomNumber(26) + 97);
    }
    names.push(str);
  }
  // create an array for all false positive results
  var results = [];

  // Loop through  each name
  for (var i = 0; i < 10; i++) {
    // Add name to our bloom filter
    bloomFilter.insert(names[i]);
    // set false positive to 0
    var falsePositiveCount = 0;

    // Loop 10000 times 
    for (var k = 0; k < 10000; k++) {
      // Random pick a name from names
      var randNum = getRandomNumber(names.length);
      // if bloom filter return true for this name and random number index greater than equal i
      if (bloomFilter.contains(names[randNum]) && randNum > i) {
        // increment false positive
        falsePositiveCount++;
      }
    }
    results.push(falsePositiveCount);
  }

  $bloomList = $('.bloom-results');
  3
  for (var i = 0; i < results.length; i++) {

    var formula = Math.pow(Math.E, (-NUM_HASH_FUNCTIONS * (i + 1) ) / BLOOM_FILTER_SIZE);
    formula = Math.pow(1 - formula, NUM_HASH_FUNCTIONS);

    // var formula = Math.pow((1 - Math.pow(Math.E, ((-NUM_HASH_FUNCTIONS * (i + 1)) / BLOOM_FILTER_SIZE)), NUM_HASH_FUNCTIONS));
    $bloomList.append('<li>Trial #' + (i + 1) + ' result ' + (results[i] / 10000) * 100 + '% false positive: Formula =  ' + formula * 100 + '%</li>');
  }
});