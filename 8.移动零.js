/**
 * 1. 冒泡排序
 * 2. continue
 */

/**
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/28/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  const max = nums.length;

  let start = 0;
  let end = max - 1;

  while (start < end) {
    const item = nums[start];
    if (item === 0) {
      nums.splice(start, 1);
      nums.push(0);
      end--;
      continue;
    }
    start++;
  }
};
const nums = [0, 0, 1, 0, 0, 3, 12];
moveZeroes(nums);
console.log(nums);

// 时间复杂度：O(n)
// 空间复杂度：O(n)
