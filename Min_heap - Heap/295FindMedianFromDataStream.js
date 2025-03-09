
var MedianFinder = function() {
  this.small = new PriorityQueue((a, b) => b - a);
  this.large = new PriorityQueue((a, b) => a - b);
};

/**
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  if (this.large.isEmpty() || num > this.large.front()) {
      this.large.enqueue(num);
  } else {
      this.small.enqueue(num);
  }

  if (this.small.size() > this.large.size() + 1) {
      this.large.enqueue(this.small.dequeue());
  } else if (this.large.size() > this.small.size() + 1) {
      this.small.enqueue(this.large.dequeue());
  }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if (this.small.size() > this.large.size()) {
      return this.small.front();
  } else if (this.large.size() > this.small.size()) {
      return this.large.front();
  } else {
      return (this.small.front() + this.large.front()) / 2.0;
  }
};

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/