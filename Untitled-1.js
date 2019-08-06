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
假设我们的环境只能存储得下 32 位的        有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/33/
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  for(let i = 0; i < x.length / 2; i++) {
    const temp = x.charAt(i);
    x.charAt(i) = x.charAt(s.length - 1 - i);
    x.charAt(x.length - 1 -i) = temp;
  }
  console.log(x)
};

reverse('123')