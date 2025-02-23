/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  const res = [[]];
  let prevIdx = 0;
  let idx = 0;

  for(let i = 0; i < nums.length; i++) {
      idx = (i >= 1 && nums[i] === nums[i - 1]) ? prevIdx : 0;
      prevIdx = res.length;
      for (let j = idx; j < prevIdx; j++) {
          const tmp = [...res[j]];
          tmp.push(nums[i]);
          res.push(tmp);
      }
  }
  return res;
};