/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/23/
 */
const rotate = function(nums, k) {
  if (nums.length < 2 || k === 0) {
    return;
  }
  k = k % nums.length;
  const cut = nums.splice(nums.length - k, k);
  nums.unshift(...cut);
};

const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);
