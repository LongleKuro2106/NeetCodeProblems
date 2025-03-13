var islandsAndTreasure = function(grid) {
  let ROWS = grid.length;
  let COLS = grid[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const INF = 2147483647;
  let visit = Array.from({ length: ROWS }, () =>
    Array(COLS).fill(false));

    const bfs = (r, c) => {
    const q = new Queue([[r, c]]);
    const visit = Array.from({ length: ROWS }, () =>
      Array(COLS).fill(false));
    visit[r][c] = true;
    let steps = 0;

    while (!q.isEmpty()) {
      let size = q.size();
      for (let i = 0; i < size; i++) {
      const [row, col] = q.pop();
      if (grid[row][col] === 0) return steps;
        for (let [dr, dc] of directions) {
        const nr = row + dr, nc = col + dc;
        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS &&
            !visit[nr][nc] && grid[nr][nc] !== -1) {
            visit[nr][nc] = true;
            q.push([nr, nc]);
            }
          }
        }
        steps++;
      }
      return INF;
    };

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        if (grid[r][c] === INF) {
          grid[r][c] = bfs(r, c);
        }
      }
    }
}