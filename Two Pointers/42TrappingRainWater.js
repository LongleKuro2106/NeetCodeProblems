/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length === 0) {
      return 0;
  }

  const stack = [];
  let res = 0;

  for(let i = 0; i < height.length; i++) {
      while (stack.length > 0 && height[i] >= height[stack[stack.length - 1]]) {
          const mid = height[stack.pop()];
          if (stack.length > 0) {
              const right = height[i];
              const left = height[stack[stack.length - 1]];
              const h = Math.min(right, left) - mid;
              const w = i - stack[stack.length -1] - 1;

              res += h * w;
          }
      }
      stack.push(i);
  }
  return res;
};