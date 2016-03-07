describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToHead", "addToTail", "removeHead", "removeTail", and "contains"', function() {
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should allow item to be added to the head', function () {
    expect(doublyLinkedList.head).to.equal(null);
    doublyLinkedList.addToHead(0);
    expect(doublyLinkedList.head.value).to.equal(0);
    doublyLinkedList.addToHead(1);
    expect(doublyLinkedList.head.value).to.equal(1);
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should remove the tail and return the value stored in the removed tail when removeTail is called', function () {
    // Error should be thrown when remove tail is called on an empty list
    expect(doublyLinkedList.removeTail()).to.throw();
    doublyLinkedList.addToHead(2);
    doublyLinkedList.addToHead(1);
    expect(doublyLinkedList.removeTail()).to.equal(2);
    expect(doublyLinkedList.tail.value).to.equal(1);
    doublyLinkedList.addToTail(2);
    expect(doublyLinkedList.removeTail()).to.equal(2);
    expect(doublyLinkedList.tail.value).to.equal(1);
    expect(doublyLinkedList.removeTail()).to.equal(1);
    expect(doublyLinkedList.tail.value).to.equal(null);
    // Error should be thrown when remove tail is called on an empty list
    expect(doublyLinkedList.removeTail()).to.throw();
    doublyLinkedList.addToHead(0);
    expect(doublyLinkedList.removeTail()).to.equal(0);
    expect(doublyLinkedList.tail.value).to.equal(null);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of doublyLinkedList
});