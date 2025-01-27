/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const n = nums.length;
  const output = new Array(n - k + 1);
  const q = new Deque();
  let l = 0, r = 0;

  while (r < n) {
      while(q.size() && nums[q.back()] < nums[r]) {
          q.popBack();
      }

      q.pushBack(r);

      if (l > q.front()) {
          q.popFront();
      }

      if ((r + 1) >= k) {
          output[l] = nums[q.front()];
          l++;
      }
      r++;
  }
return output;
};