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
var isValidBST = function(root) {
  var valid = function(node, l, r) {
      if (node === null) { return true };
      if (!(l < node.val && node.val < r)) { return false };
      return valid(node.left, l, node.val) && valid(node.right, node.val, r);
  }
  return valid(root, -Infinity, Infinity);
};