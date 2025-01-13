/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let slow = head;
  let fast = head.next;
  while (fast != null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }

  let second = slow.next;
  let prev = (slow.next = null)
      while (second !== null) {
          const tmp = second.next;
          second.next = prev;
          prev = second;
          second = tmp;
      }

      let first = head;
      second = prev;
      while (second !== null) {
          const tmp1 = first.next;
          const tmp2 = second.next;
          first.next = second;
          second.next = tmp1;
          first = tmp1;
          second = tmp2;
      }
};