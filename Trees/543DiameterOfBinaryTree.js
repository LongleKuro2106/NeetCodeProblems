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
 * @param {number[]} res
 * @return {number}
 */
var dfs = function(root, res) {
  if (root === null) {
      return 0;
  }
  const left = dfs(root.left, res);
  const right = dfs(root.right, res);
  res[0] = Math.max(res[0], left + right);
  return 1 + Math.max(left, right);
}


/**
* @param {TreeNode} root
* @return {number}
*/
var diameterOfBinaryTree = function(root) {
const res = [0];
dfs(root, res);
return res[0];
};