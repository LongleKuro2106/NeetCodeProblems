/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

  // Min-heap approach
  // const minHeap = new MinPriorityQueue();
  // for (let num of nums) {
  //     minHeap.push(num);
  //     if (minHeap.size() > k) {
  //         minHeap.pop();
  //     }
  // }
  // return minHeap.front();

  var partition = function(l, r) {
      const mid = (l + r) >> 1;
      [nums[mid], nums[l + 1]] = [nums[l + 1], nums[mid]];
          if (nums[l] < nums[r])
              [nums[l], nums[r]] = [nums[r], nums[l]];
          if (nums[l + 1] < nums[r])
              [nums[l + 1], nums[r]] = [nums[r], nums[l + 1]];
          if (nums[l] < nums[l + 1])
              [nums[l], nums[l + 1]] = [nums[l + 1], nums[l]];

          const pivot = nums[l + 1];
          let i = l + 1;
          let j = r;

          while (true) {
              while (nums[++i] > pivot);
              while (nums[--j] < pivot);
              if (i > j) break;
              [nums[i], nums[j]] = [nums[j], nums[i]];
          }

          nums[l + 1] = nums[j];
          nums[j] = pivot;
          return j;
  }

  var quickSelect = function(k) {
      let l = 0;
      let r = nums.length - 1;

      while (true) {
          if (r <= l + 1) {
              if (r == l + 1 && nums[r] > nums[l])
                  [nums[l], nums[r]] = [nums[r], nums[l]];
              return nums[k];
          }

          const j = partition(l, r);

          if (j >= k) r = j - 1;
          if (j <= k) l = j + 1;
      }
  }
  return quickSelect(k - 1);
};