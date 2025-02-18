/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const res = [];
  var dfsSerialize = function(node, res) {
      if(node === null){
          res.push('N');
          return;
      }
      res.push(node.val.toString());
      dfsSerialize(node.left, res);
      dfsSerialize(node.right, res);
  }

  dfsSerialize(root, res);
  return res.join(',');
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  const vals = data.split(',');
  const i = { val : 0 };

  var dfsDeserialize = function(vals, i) {
      if(vals[i.val] === 'N') {
          i.val++;
          return null;
      }
      const node = new TreeNode(parseInt(vals[i.val]));
      i.val++;
      node.left = dfsDeserialize(vals, i);
      node.right = dfsDeserialize(vals, i);
      return node;
  }
  return dfsDeserialize(vals, i);
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/