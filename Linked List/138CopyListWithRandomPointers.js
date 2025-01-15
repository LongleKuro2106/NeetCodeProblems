/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
  if (head === null) {
      return null;
  }

  let l1 = head;
  while (l1) {
      let l2 = new Node(l1.val);
      l2.next = l1.random;
      l1.random = l2;
      l1 = l1.next;
  }

  let newHead = head.random;

  l1 = head;
  while (l1){
      let l2 = l1.random;
      l2.random = l2.next ? l2.next.random : null;
      l1 = l1.next;
  }

  l1 = head;
  while (l1) {
      let l2 = l1.random;
      l1.random = l2.next;
      l2.next = l1.next ? l1.next.random : null;
      l1 = l1.next;
  }

  return newHead;
};
