/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // Fast && Slow Pointer Method: Reduce Space Complexity O(1)
  // let fast = head;
  // let slow = head;

  // while (fast !== null && fast.next !== null) {
  //     fast = fast.next.next;
  //     slow = slow.next;

  //     if (fast === slow) {
  //         return true;
  //     }
  // }
  // return false;


  // Hash Set Method: Reduce time complexity but require more space
  let seen = new Set();
  let cur = head;
  while (cur) {
      if (seen.has(cur)) {
          return true;
      }
      seen.add(cur);
      cur = cur.next;
  }
  return false;
};