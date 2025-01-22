/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxP = 0;
  let minBuy = prices[0];

  for (let sell of prices) {
      maxP = Math.max(maxP, sell - minBuy);
      minBuy = Math.min(minBuy, sell);
  }
  return maxP;
};