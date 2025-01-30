/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let l = 1;
  let r = Math.max(...piles);
  let res = r;

  while (l <= r) {
      const k = Math.floor((l + r) / 2);

      let totalTime = 0;
      for (const p of piles) {
          totalTime += Math.ceil(p / k);
      }
      if (totalTime <= h) {
          res = k;
          r = k - 1;
      } else {
          l = k + 1;
      }
  }
  return res;

};