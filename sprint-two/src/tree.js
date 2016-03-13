var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  newTree.parent = null;
  newTree.children = [];
  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = new Tree(value);
  newChild.parent = this;
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var res = this.value === target;
  
  _.each(this.children, function(child) {
    res = child.contains(target) || res;
  });

  return res;
};

// Removes a child from it's parent and removes it connection to the parent.
treeMethods.removeFromParent = function () {
  if (this.parent === null) {
    return;
  }
  var parent = this.parent;
  this.parent = null;

  for (var i = 0; i < parent.children.length; i++) {
    if (parent.children[i] === this) {
      parent.children.splice(i,1);
    }
  }
};

  // * Complexity: What is the time complexity of the above functions?

  // addChild = O(1)
  // contains = O(n)