/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let adj = Array.from( { length: numCourses }, () => []);
  let indegree = Array(numCourses).fill(0);

  for (let [nxt, pre] of prerequisites) {
      indegree[nxt]++;
      adj[pre].push(nxt);
  }

  let output = [];

  const dfs = (node) => {
      output.push(node);
      indegree[node]--;
      for (let nei of adj[node]) {
          indegree[nei]--;
          if (indegree[nei] === 0) {
              dfs(nei);
          }
      }
  };

  for (let i = 0; i < numCourses; i++) {
      if (indegree[i] === 0) {
          dfs(i);
      }
  }
  return output.length === numCourses ? output : [];
};