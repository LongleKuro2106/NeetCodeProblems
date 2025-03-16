/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  let ROWS = heights.length, COLS = heights[0].length;
  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
  let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

  let pacQueue = new Queue();
  let atlQueue = new Queue();

  for (let c = 0; c < COLS; c++) {
      pacQueue.push([0, c]);
      atlQueue.push([ROWS - 1, c]);
  }

  for (let r = 0; r < ROWS; r++) {
      pacQueue.push([r, 0]);
      atlQueue.push([r, COLS - 1]);
  }

  var bfs = function(queue, ocean, heights) {
      while (!queue.isEmpty()) {
          let [r, c] = queue.pop();
          ocean[r][c] = true;
          for (let [dr, dc] of directions) {
              let nr = r + dr, nc = c + dc;
              if (nr >= 0 && nr < ROWS && nc < COLS
               && !ocean[nr][nc] && heights[nr][nc] >= heights[r][c]) {
                  queue.push([nr, nc])
              }
          }
      }
  }
  bfs(pacQueue, pac, heights);
  bfs(atlQueue, atl, heights);
  let res = [];
  for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
          if (pac[r][c] && atl[r][c]) {
              res.push([r, c]);
          }
      }
  }
  return res;
};