/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  const stack = [];
  const n = heights.length

  for (let i = 0; i <= n; i++ ) {
      // let start = i;
      while (stack.length > 0 && (i === n || heights[stack[stack.length -1]] >= heights[i])) {
          // const [index, height] = stack.pop();
          const height = heights[stack.pop()];
          const width = stack.length === 0 ? i : i-stack[stack.length - 1] - 1;
          maxArea = Math.max(maxArea, height * width);
          // start = index;
      }
      // stack.push([start, heights[i]]);
      stack.push(i);
  }

  // for (const [index, height] of stack) {
  //     maxArea = Math.max(maxArea, height * (heights.length - index));
  // }
  return maxArea;
};