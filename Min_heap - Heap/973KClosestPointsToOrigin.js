/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);

  for (const [x, y] of points) {
      const dist = x ** 2 + y ** 2;
      maxHeap.push([dist, x, y]);
      if (maxHeap.size() > k) {
          maxHeap.pop();
      }
  }
  const res = [];
  while (maxHeap.size() > 0) {
      let tmp = maxHeap.pop();
      res.push([tmp[1], tmp[2]]);
  }
  return res
};