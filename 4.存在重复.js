/**
 * 知识点：
 * 1. Set
 *  - 对象个数set.size
 *  - new Set([iterable])
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/24/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  if (!nums.length) {
    return false;
  }
  const set = new Set(nums);
  return set.size !== nums.length;
};
console.log(containsDuplicate([0]));
