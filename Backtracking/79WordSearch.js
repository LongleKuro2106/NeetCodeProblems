/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const rows = board.length;
  const cols = board[0].length;

  var dfs = function(r, c, i) {
      if (i === word.length) return true;
      if (r < 0 || c < 0 || r >= rows || c >= cols ||
          board[r][c] !== word[i] || board[r][c] === `#`) {
          return false
      }
      board[r][c] = `#`
      const res = dfs(r + 1, c, i + 1) ||
                  dfs(r - 1, c, i + 1) ||
                  dfs(r, c + 1, i + 1) ||
                  dfs(r, c - 1, i + 1);
      board[r][c] = word[i];
      return res;
  }

  for(let r = 0; r <= rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (dfs(r, c, 0)) return true;
      }
  }
  return false;
};