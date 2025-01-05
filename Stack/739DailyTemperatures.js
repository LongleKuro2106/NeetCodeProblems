/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const res = new Array(temperatures.length).fill(0);
  const n = temperatures.length;

  for (let i = n - 2; i >= 0; i--) {
      let j = i + 1;
      while(j < n && temperatures[j] <= temperatures[i]) {
          if (res[j] === 0) {
              j = n;
              break;
          }
          j += res[j];
      }

      if (j < n) {
          res[i] = j - i;
      }
  }
  return res;
};