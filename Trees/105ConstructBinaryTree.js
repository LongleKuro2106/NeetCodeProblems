/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  let pre_idx = 0;
  let indices = new Map();
  // let preIdx = 0, inIdx = 0;

  inorder.forEach((val, i) => indices.set(val, i));

  var dfs = function(l, r) {
      if (l > r) return null;
      let root_val = preorder[pre_idx++];
      let root = new TreeNode(root_val);
      let mid = indices.get(root_val);
      root.left = dfs(l, mid - 1);
      root.right = dfs(mid + 1, r);
      return root
  }

  return dfs(0, inorder.length - 1);

  // var dfs = function(limit) {
  //     if (preIdx >= preorder.length) return null;
  //     if (inorder[inIdx] === limit) {
  //         inIdx++;
  //         return null;
  //     }

  //     let root = new TreeNode(preorder[preIdx++]);
  //     root.left = dfs(root.val);
  //     root.right = dfs(limit);
  //     return root;
  // }

  // return dfs(Infinity);
};