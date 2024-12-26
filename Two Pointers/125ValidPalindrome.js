/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let l = 0, r = s.length - 1;

  while (l < r) {
      while (l < r && !/[a-zA-Z0-9]/.test(s[l])) {
          l++;
      }
      while (r > l && !/[a-zA-Z0-9]/.test(s[r])) {
          r--;
      }
      if (s[l].toLowerCase() !== s[r].toLowerCase()) {
          return false;
      }
      l++;
      r--;
  }
  return true;
};
