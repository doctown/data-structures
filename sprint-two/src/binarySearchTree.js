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
  // if ( target < this.value )
};
  
BinarySearchTree.prototype.depthFirstLog = function(callback) {

};




// Tree stores a value and has two child nodes
// var Tree = function(value) {
//   var tree = {};
//   var val = value;
//   var leftChild = null;
//   var rightChild = null;
  
//   var getVal = function() {
//     return val;
//   };

//   var getLeftChild = function() {
//     return left;
//   };

//   var getRightChild = function() {
//     return right;
//   };

//   var addLeftChild = function(value) {
//     left = new Tree(value);
//   };

//   var addRightChild = function(value) {
//     right = new Tree(value);
//   };

//   return tree;

// };

/*
 * Complexity: What is the time complexity of the above functions?
 */
