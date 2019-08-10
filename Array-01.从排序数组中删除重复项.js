/**
 * 知识点：
 * 1. forEach
 * 2. indexOf/lastIndexOf
 * 3. splice
 * 4. Object.keys()
 */

/**
 * @param {number[]} nums
 * @return {number}
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/21/
 */
const removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  let slow = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[slow] !== nums[i]) {
      slow++;
      nums[slow] = nums[i];
    }
  }
  return slow + 1;
  // 递归
  // const obj = {};
  // nums.forEach((num, i) => {
  //   if (nums.indexOf(num) !== nums.lastIndexOf(num)) {
  //     nums.splice(nums.indexOf(num), 1);
  //   }
  //   if (!obj[num]) {
  //     obj[num] = 1;
  //   }
  // });
  // if (Object.keys(obj).length !== nums.length) {
  //   removeDuplicates(nums);
  // }
  // return nums.length;
};

console.log(removeDuplicates([1, 1, 1, 1]));
