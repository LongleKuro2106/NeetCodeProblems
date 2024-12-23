/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var res = {};
  var str = '';
  var len = strs.length;
  for (var i = 0; i < len; i++) {
    str = Array.from(strs[i]).sort().join('');
    if (!res[str]) res[str] = [];
    res[str].push(strs[i]);
  }
  return Object.values(res);
};