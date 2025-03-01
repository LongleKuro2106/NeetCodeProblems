var TrieNode = function() {
  this.children = Array(26).fill(null);
  this.word = false;
}

var WordDictionary = function() {
  this.root = new TrieNode();
};

var getIndex = function(c) {
  return c.charCodeAt(0) - 'a'.charCodeAt(0);
};
/**
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let cur = this.root;
  for (const c of word) {
      const idx = getIndex(c);
      if (cur.children[idx] === null) {
          cur.children[idx] = new TrieNode();
      }
      cur = cur.children[idx];
  }
  cur.word = true;
};

var dfs = function(word, j, root) {
  let cur = root;

  for (let i = j; i < word.length; i++) {
      const c = word[i];
      if (c === '.') {
          for (const child of cur.children) {
              if (child !== null &&
                  dfs(word, i + 1, child)) {
                      return true
              }
          }
          return false;
      } else {
          const idx = getIndex(c);
          if (cur.children[idx] === null) {
              return false;
          }
          cur = cur.children[idx];
      }
  }
  return cur.word;
}

/**
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  return dfs(word, 0, this.root);
};

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/