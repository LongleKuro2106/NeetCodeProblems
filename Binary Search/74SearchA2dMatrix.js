/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // const m = matrix.length, n = matrix[0].length;
  // let r = 0, c = n - 1;

  // while (r < m && c >= 0) {
  //     if (matrix[r][c] > target) {
  //         c--;
  //     } else if (matrix[r][c] < target) {
  //         r++;
  //     } else {
  //         return true;
  //     }
  // }
  let ROWS = matrix.length, COLS = matrix[0].length;

  let l = 0, r = ROWS * COLS - 1;
      while (l <= r) {
          let m = l + Math.floor((r - l) / 2);
          let row = Math.floor(m / COLS), col = m % COLS;
          if (target > matrix[row][col]) {
              l = m + 1;
          } else if (target < matrix[row][col]) {
              r = m - 1;
          } else {
              return true;
      }
  }
  return false;
};