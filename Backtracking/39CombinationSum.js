/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // let ans = [];
  // let cur = [];
  // var backtrack = function(candidates, target, ans, cur, index) {
  //     if (target === 0) {
  //         ans.push([...cur]);
  //     } else if (target < 0 || index >= candidates.length) {
  //         return;
  //     } else {
  //         cur.push(candidates[index]);
  //         backtrack(candidates, target - candidates[index], ans, cur, index);

  //         cur.pop()
  //         backtrack(candidates, target, ans, cur, index + 1);
  //     }
  // }
  // backtrack(candidates, target, ans, cur, 0);
  // return ans;

  const res = [];
  candidates.sort((a, b) => a - b);

  var dfs = function(i, cur, total) {
      if(total === target) {
          res.push([...cur]);
          return;
      }

      for(let j = i; j < candidates.length; j++) {
          if (total + candidates[j] > target) {
              return;
          }
          cur.push(candidates[j]);
          dfs(j , cur, total + candidates[j])
          cur.pop();
      }
  };

  dfs(0, [], 0);
  return res;
};