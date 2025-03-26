/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord) ||
  beginWord === endWord) {
  return 0;
}
const m = wordList[0].length;
const wordSet = new Set(wordList);
let qb = new Queue([beginWord]);
let qe = new Queue([endWord]);
let fromBegin = { [beginWord]: 1 };
let fromEnd = { [endWord]: 1 };

while (!qb.isEmpty() && !qe.isEmpty()) {
  if (qb.size() > qe.size()) {
      [qb, qe] = [qe, qb];
      [fromBegin, fromEnd] = [fromEnd, fromBegin];
  }
  const size = qb.size();
  for (let k = 0; k < size; k++) {
      const word = qb.pop();
      const steps = fromBegin[word];
      for (let i = 0; i < m; i++) {
          for (let c = 97; c <= 122; c++) {
              if (String.fromCharCode(c) === word[i])
                  continue;
              const nei = word.slice(0, i) +
                          String.fromCharCode(c) +
                          word.slice(i + 1);
              if (!wordSet.has(nei))
                  continue;
              if (fromEnd[nei] !== undefined)
                  return steps + fromEnd[nei];
              if (fromBegin[nei] === undefined) {
                  fromBegin[nei] = steps + 1;
                  qb.push(nei);
              }
          }
      }
  }
}
return 0;
};