// Double Linked List soultion in
// class Node {
//     /**
//      * @param {number} key
//      * @param {number} val
//      */
//     constructor(key, val) {
//         this.key = key;
//         this.val = val;
//         this.prev = null;
//         this.next = null;
//     }
// }

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  // this.left = new Node(0, 0);
  // this.right = new Node(0, 0);
  // this.left.next = this.right;
  // this.right.prev = this.left;
};

/**
* @param {Node} node
*/
// LRUCache.prototype.remove = function(node) {
//     const prev = node.prev;
//     const nxt = node.next;
//     prev.next = nxt;
//     nxt.prev = prev;
// };

/**
* @param {Node} node
*/
// LRUCache.prototype.insert = function(node) {
//     const prev = this.right.prev;
//     prev.next = node;
//     node.prev = prev;
//     node.next = this.right;
//     this.right.prev = node;
// };

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  // if (this.cache.has(key)) {
  //     const node = this.cache.get(key);
  //     this.remove(node);
  //     this.insert(node);
  //     return node.val;
  // }
  // return -1;

  if (!this.cache.has(key)) return -1;
  const value = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, value);
  return value;
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
      // this.remove(this.cache.get(key));
      this.cache.delete(key);
  } else if (this.cache.size === this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
  }
  this.cache.set(key,value)
  // const newNode = new Node(key, value);
  // this.cache.set(key, newNode);
  // this.insert(newNode);

  // if (this.cache.size > this.cap) {
  //     const lru = this.left.next;
  //     this.remove(lru);
  //     this.cache.delete(lru.key);
  // }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
