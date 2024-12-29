/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a,b) => a - b); //sort the array
  const res = []; // result array

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] === nums[i-1]) continue;

      let l = i + 1; // Left pointer
      let r = nums.length - 1; // Right pointer
      while (l < r) {
          const sum = nums[i] + nums[l] + nums[r];
          if ( sum > 0) { // decrement right pointer
              r--;
          } else if ( sum < 0) { // increase left pointer
              l++;
          } else {
              res.push([nums[i], nums[l], nums[r]]);
              l++;
              r--;
              while (l < r && nums[l] === nums[l-1]){ //make sure no duplicate elements
                  l++
              }
          }
      }
  }
  return res;
};