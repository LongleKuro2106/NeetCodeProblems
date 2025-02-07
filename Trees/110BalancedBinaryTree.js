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
 * @return {boolean}
 */
var isBalanced = function(root) {
  return dfs(root)[0] === 1;
};

var dfs = function(root) {
  if (!root) {
      return [1, 0];
  }

  const left = dfs(root.left);
  const right = dfs(root.right);
  const balanced = left[0] === 1 && right[0] === 1 && Math.abs(left[1] - right[1]) <= 1;
  const height = 1 + Math.max(left[1], right[1]);
  return [balanced ? 1 : 0, height]
}