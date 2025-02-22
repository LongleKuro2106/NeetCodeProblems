/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];

  var backtrack = function(nums, idx) {
      if (idx === nums.length) {
          res.push([...nums])
          return;
      }
      for (let i = idx; i < nums.length; i++) {
          [nums[idx], nums[i]] = [nums[i], nums[idx]];
          backtrack(nums, idx + 1);
          [nums[idx], nums[i]] = [nums[i], nums[idx]];
      }
  }
  backtrack(nums, 0);
  return res;
};