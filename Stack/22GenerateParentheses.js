/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = Array.from({ length: n + 1 }, () => []);
  res[0] = [""];

  for (let k = 0; k <= n; k++) {
      for (let i = 0; i < k; i++) {
          for (const left of res[i]) {
              for (const right of res[k - i - 1]) {
                  res[k].push("(" + left + ")" + right);
              }
          }
      }
  }
  return res[n];
};
