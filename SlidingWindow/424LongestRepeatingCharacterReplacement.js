/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let count = new Map();
  let res = 0;
  let l = 0, maxf = 0;

  for (r = 0; r < s.length; r++) {
      count.set(s[r], (count.get(s[r]) || 0) + 1);
      maxf = Math.max(maxf, count.get(s[r]));

      while((r - l + 1) - maxf > k) {
          count.set(s[l], count.get(s[l]) - 1);
          l++;
      }
      res = Math.max(res, r - l + 1);
  }
  return res;
};