/**
 * 知识点：
 * 1. 数组解构
 * 2. splice
 */

/**
 * @param {number[]} prices
 * @return {number}
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/22/
 */
const maxProfit = function(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i - 1] < prices[i]) {
      profit = profit + prices[i] - prices[i - 1];
    }
  }
  return profit;
  // 递归
  // const [a, b] = prices;
  // let num = 0;
  // if (a < b) {
  //   num = b - a;
  // }
  // prices.splice(0, 1);
  // if (prices.length > 1) {
  //   num += maxProfit(prices);
  // }
  // return num;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
