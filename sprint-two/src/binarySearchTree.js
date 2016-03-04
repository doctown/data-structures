var BinarySearchTree = function(value) {
  var object = Object.create(BinarySearchTree.prototype);

  object.value = value;
  object.left = null;
  object.right = null;

  return object;

};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};
  
BinarySearchTree.prototype.contains = function(target) {
  if (target === this.value) {
    return true;
  } else if (target < this.value && this.left != null) {
    return this.left.contains(target);
  } else if (target > this.value && this.right != null) {
    return this.right.contains(target);
  } else {
    return false;
  }
};
  
BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 // insert: O(log(n))
 // contains: O(log(n))
 // depthFirstLog: O(n)
