/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const ROWS = grid.length, COLS = grid[0].length;

  const dfs = (r, c) => {
      if (r < 0 || c < 0 || r >= ROWS ||
          c >= COLS || grid[r][c] === 0) return 0;

      grid[r][c] = 0;
      let res = 1;
      for (const [dr, dc] of directions) {
          res += dfs(r + dr, c + dc);
      }
      return res;
  }

  let area = 0;
  for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
          if (grid[r][c] === 1) {
              area = Math.max(area, dfs(r, c));
          }
      }
  }
  return area;
};