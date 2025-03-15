/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let ROWS = grid.length, COLS = grid[0].length;
let fresh = 0, time = 0;

for (let r = 0; r < ROWS; r++) {
  for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === 1) fresh++;
  }
}

let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

while (fresh > 0) {
  let flag = false;
  for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
          if (grid[r][c] === 2) {
              for (let [dr, dc] of directions) {
                  let row = r + dr, col = c + dc;
                  if (row >= 0 && col >= 0 &&
                      row < ROWS && col < COLS &&
                      grid[row][col] === 1) {
                      grid[row][col] = 3;
                      fresh--;
                      flag = true;
                  }
              }
          }
      }
  }

  if (!flag) return -1;

  for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
          if (grid[r][c] === 3) grid[r][c] = 2;
      }
  }

  time++;
}

return time;
};