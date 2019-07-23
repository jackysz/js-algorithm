/**
  给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

  你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

  示例:

  给定 nums = [2, 7, 11, 15], target = 9

  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]
  https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/29/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  // Object
  let obj = {};
  for (var i = 0; i < nums.length; i++) {
    // if (target - nums[i]) in obj, return
    if (obj[target - nums[i]] !== undefined) {
      return [obj[target - nums[i]], i];
    }
    // key is value, value is index
    obj[nums[i]] = i;
  }
  // const first = nums.find((num, i) => {
  //   return nums.includes(target - num) && nums.indexOf(target - num) !== i;
  // });
  // return [nums.indexOf(first), nums.lastIndexOf(target - first)];
};

console.log(twoSum([2, 7, 11, 15], 9));
