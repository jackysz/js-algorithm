/**
 * @desc 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * @desc 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。
 * @desc 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/27/
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[digits.length - 1] !== 9) {
    digits[digits.length - 1]++;
    return digits;
  }
  const last = [0];
  digits.splice(-1);
  if (digits.length === 0) {
    return [1, 0];
  }
  const arr = plusOne(digits);
  return arr.concat(last);
};
console.log(plusOne([999]));
