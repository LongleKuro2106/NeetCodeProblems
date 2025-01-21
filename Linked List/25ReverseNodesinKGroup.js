/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var getKth = function(curr, k) {
  while (curr && k > 0) {
      curr = curr.next;
      k--;
  }
  return curr;
}
/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
var reverseKGroup = function(head, k) {
  const dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
      const kth = getKth(groupPrev, k);
      if (!kth) {
          break;
      }
      const groupNext = kth.next;

      let prev = kth.next;
      let curr = groupPrev.next;
      while (curr != groupNext) {
          const tmp = curr.next;
          curr.next = prev;
          prev = curr;
          curr = tmp;
      }

      const tmp = groupPrev.next;
      groupPrev.next = kth;
      groupPrev = tmp;
  }
  return dummy.next
};