/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
  const par = new Array(edges.length + 1).fill(0).map((_, i) => i);
  const rank = new Array(edges.length + 1).fill(1);

  var find = function(n) {
      let p = par[n];
      while (p !== par[p]) {
          par[p] === par[par[p]];
          p = par[p]
      }
      return p;
  }

  var union = function(n1, n2) {
      const p1 = find(n1);
      const p2 = find(n2);

      if (p1 === p2) return false;
      if (rank[p1] > rank[p2]) {
          par[p2] = p1;
          rank[p1] += rank[p2];
      } else {
          par[p1] = p2;
          rank[p2] += rank[p1];
      }
      return true
  }

  for (const [n1, n2] of edges) {
      if (!union(n1, n2)) {
          return [n1, n2];
      }
  }
  return [];
};