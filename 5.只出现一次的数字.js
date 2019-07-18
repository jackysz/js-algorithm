/**
 * 知识点：
 * 1. find
 * 2. reduce
 * 3. ^ 异或
 *    a ^ 0 = a
 *    a ^ a = 0
 *    a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = 0
 */

/**
 * @desc 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/25/
 */
const singleNumber = function(nums) {
  // return nums.find(value => nums.indexOf(value) === nums.lastIndexOf(value));
  return nums.reduce((sum, cur) => sum ^ cur, 0);
};

console.log(singleNumber([4, 1, 2, 1, 2]));
