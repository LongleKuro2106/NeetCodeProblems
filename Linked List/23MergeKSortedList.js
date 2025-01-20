/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists || lists.length === 0) return null;

  // for (let i = 1; i < lists.length; i++) {
  //     lists[i] = mergeList(lists[i - 1], lists[i]);
  // }
  // return lists[lists.length - 1];
  while (lists.length > 1) {
      const mergedLists = [];
      for (let i = 0; i < lists.length; i += 2) {
          const l1 = lists[i];
          const l2 = (i + 1) < lists.length ? lists[i + 1] : null;
          mergedLists.push(mergeList(l1,l2));
      }
      lists = mergedLists;
  }
  return lists[0];
};

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var mergeList = function(l1, l2) {
  const dummy = new ListNode();
  // let tail = dummy;
  let curr = dummy;

  while (l1 && l2) {
      if (l1.val < l2.val) {
          // tail.next = l1;
          curr.next = l1;
          l1 = l1.next;
      } else {
          // tail.next = l2;
          curr.next = l2;
          l2 = l2.next;
      }
      // tail = tail.next;
      curr = curr.next;
  }
  // if (l1) {
  //     tail.next = l1;
  // }
  // if (l2) {
  //     tail.next = l2;
  // }
  curr.next = l1 ? l1 : l2;
  return dummy.next;
};
