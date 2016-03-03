var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.children = [];
  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target) {
  var res = this.value === target;
  
  _.each(this.children, function(child) {
    res = child.contains(target) || res;
  });

  return res;
};




  // * Complexity: What is the time complexity of the above functions?

  // addChild = O(1)
  // contains = O(n)