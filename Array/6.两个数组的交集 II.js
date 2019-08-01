/**
 * 1. 数据结构
 * 2. filter 筛选
 */

/**
 * @desc 给定两个数组，编写一个函数来计算它们的交集。
 * @desc 输出结果中每个元素出现的次数，应与元素在两个数组中出现的次数一致。
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/26/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
  // 新建1个对象存储一个数组的属性和出现次数
  const obj = {};
  nums1.forEach(item => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item]++;
    }
  });
  // 遍历另外一个数组，其属性在obj中出现且剩余次数不为0时，返回这个值
  return nums2.filter(item => {
    if (!obj[item]) {
      return false;
    }
    obj[item]--;
    return true;
  });
  // 遍历一个数组，其属性在另一个数组出现，包含这个值，然后在另一个数组删掉这个值
  // var res = [];
  // for (var i = 0; i < nums1.length; i++) {
  //   if (nums2.indexOf(nums1[i]) != -1) {
  //     res.push(nums1[i]);
  //     nums2.splice(nums2.indexOf(nums1[i]), 1);
  //   }
  // }
  // return res;
};
const nums1 = [1, 2],
  nums2 = [1, 1];
console.log(intersect(nums1, nums2));
