/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const n = s.length;
  const res = [];
  const part = [];
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let l = 1; l <= n; l++) {
      for (let i = 0; i <= n - 1; i++) {
          dp[i][i + l - 1] = (s[i] === s[i + l - 1] &&
                             (i + 1 > (i + l -2) ||
                             dp[i + 1][i + l -2] ));
      }
  }

  var dfs = function(i) {
      if (i >= s.length) {
          res.push([...part]);
          return;
      }
      for (let j = i; j < s.length; j++) {
          if (dp[i][j]) {
              part.push(s.substring(i, j + 1));
              dfs(j + 1, s, part, res);
              part.pop();
          }
      }
  }
  dfs(0);
  return res;
};