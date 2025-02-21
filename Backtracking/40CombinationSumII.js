/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let res = [];
  candidates.sort((a,b) => a - b)

  var dfs = function(idx, path, cur) {
      if (cur === target) {
          res.push([...path]);
          return;
      }
      for (let i = idx; i < candidates.length; i++) {
          if (i > idx && candidates[i] === candidates[i - 1]) {
              continue;
          }
          if (cur + candidates[i] > target) {
              break;
          }

          path.push(candidates[i]);
          dfs(i + 1, path, cur + candidates[i]);
          path.pop();
      }
  }
  dfs(0 , [], 0);
  return res;
};