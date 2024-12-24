/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const count = {};

  // Step 1: Count the frequency of each number
  for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
  }

  // Step 2: Create buckets where the index represents frequency
  const freq = Array(nums.length + 1).fill(null).map(() => []);

  for (const [num, cnt] of Object.entries(count)) {
      freq[cnt].push(parseInt(num)); // Group numbers by frequency
  }

  // Step 3: Gather the top K frequent elements
  const res = [];
  for (let i = freq.length - 1; i >= 0 && res.length < k; i--) {
      if (freq[i].length > 0) {
          res.push(...freq[i]); // Add all numbers with this frequency
      }
  }

  return res.slice(0, k); // Ensure only the top K elements are returned
};