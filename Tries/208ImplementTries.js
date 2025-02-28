var TrieNode = function() {
  this.children = new Map();
  this.endOfWord = false;
};

var Trie = function() {
  this.root = new TrieNode();
};

/**
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let cur = this.root;
  for (let c of word) {
      if (!cur.children.has(c)) {
          cur.children.set(c, new TrieNode());
      }
      cur = cur.children.get(c);
  }
  cur.endOfWord = true;
};

/**
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let cur = this.root;
  for (let c of word) {
      if (!cur.children.has(c)) {
          return false;
      }
      cur = cur.children.get(c);
  }
  return cur.endOfWord;
};

/**
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let cur = this.root;
  for (let c of prefix) {
      if (!cur.children.has(c)) {
          return false;
      }
      cur = cur.children.get(c);
  }
  return true;
};
