/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  let sMap = {}
  for (let i = 0; i< s.length; i++) {
      sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
      if(!sMap[t[i]]) {
          return false;
      }
      sMap[t[i]]--;
  }
  return true;
};