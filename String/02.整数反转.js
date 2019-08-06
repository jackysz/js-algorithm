/**
 * 整数反转
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
示例 1:
输入: 123
输出: 321
 示例 2:
输入: -123
输出: -321
示例 3:
输入: 120
输出: 21
注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。
请根据这个假设，如果反转后整数溢出那么就返回 0。
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/33/
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 数学方法 | math
  let num = 0;
  while (x != 0) {
    const pop = x % 10;
    num = num * 10 + pop;
    x = Math.ceil(x / 10);
  }
  return -num > 2 ** 31 || num > 2 ** 31 - 1 ? 0 : num;
  // 使用数组 | use Array
  // let num = Number(
  //   Math.abs(x)
  //     .toString()
  //     .split("")
  //     .reverse()
  //     .join("")
  // );
  // if (x < 0) {
  //   num = -num;
  // }
  // if (-num > 2 ** 31 || num > 2 ** 31 - 1) {
  //   return 0;
  // }
  // return num;
};

console.log(reverse(-123));

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
