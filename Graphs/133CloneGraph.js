/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
  const oldToNew = new Map();

  var dfs = function(node, oldToNew) {
      if (node === null) {
          return null;
      }

      if (oldToNew.has(node)) {
          return oldToNew.get(node);
      }

      const copy = new Node(node.val);
      oldToNew.set(node, copy);

      for (const nei of node.neighbors) {
          copy.neighbors.push(dfs(nei, oldToNew));
      }
      return copy;
  }

  return dfs(node, oldToNew);
};