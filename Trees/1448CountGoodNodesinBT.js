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
 * @return {number}
 */
var goodNodes = function(root) {
  var dfs = function(node, maxVal) {
      if (!node) { return 0; }

      let res = node.val >= maxVal ? 1 : 0;
      maxVal = Math.max(maxVal, node.val);
      res += dfs(node.left, maxVal);
      res += dfs(node.right, maxVal);
      return res;
  }
  return dfs(root, root.val);
};

