/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  const subset = [];

  var dfs = function(nums, i, subset, res) {
      if (i >= nums.length) {
          res.push([...subset]);
          return;
      }
      subset.push(nums[i]);
      dfs(nums, i + 1, subset, res);
      subset.pop();
      dfs(nums, i + 1, subset, res);
  }

  dfs(nums, 0, subset, res);
  return res;
};