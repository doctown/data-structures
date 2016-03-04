

// ------------------------
// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = [];
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.graph).indexOf(node.toString()) !== -1;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  _.each(this.graph[node], function (item) {
    this.removeElement(item, node);
  });
  delete this.graph[node];
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.graph[fromNode].indexOf(toNode) !== -1;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode].push(toNode);
  this.graph[toNode].push(fromNode);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.removeElement(fromNode, toNode);
  this.removeElement(toNode, fromNode);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.graph, function(item, key) {
    cb(key);
  });
};

Graph.prototype.removeElement = function(key, obj) {
  var itemIndex = this.graph[key].indexOf(obj);
  this.graph[key].splice(itemIndex, 1);    
};
/*
 * Complexity: What is the time complexity of the above functions?
 */


