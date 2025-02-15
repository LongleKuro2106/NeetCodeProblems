/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var dfs = function(node, tmp) {
      if (!node) return;
      dfs(node.left, tmp);
      tmp[0]--;
      if (tmp[0] === 0) {
          tmp[1] = node.val;
          return;
      }
      dfs(node.right, tmp);
  }

  const tmp = new Int32Array(2);
  tmp[0] = k;
  dfs(root, tmp);
  return tmp[1];
};