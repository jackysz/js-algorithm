/**
 * 实现 strStr()
实现 strStr() 函数。
给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
示例 1:
输入: haystack = "hello", needle = "ll"
输出: 2
示例 2:
输入: haystack = "aaaaa", needle = "bba"
输出: -1
说明:
当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/38/
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 方法一：利用String语法
  // return haystack.indexOf(needle)
  // 方法二：暴力解法
  // if (needle === "") {
  //   return 0;
  // }
  // let j = 0;
  // for (let i = 0; i < haystack.length; i++) {
  //   if (haystack.charAt(i) === needle.charAt(j)) {
  //     j++;
  //   } else {
  //     // 如果不匹配，i置为上一轮匹配的下一位，j置为0
  //     i = i - j;
  //     j = 0;
  //   }
  //   // 全部匹配上，返回
  //   if (j === needle.length) {
  //     return i - j + 1;
  //   }
  // }
  // return -1;
  // 方法三：KMP解法
};

console.log(strStr("BBC ABCDAB ABCDABCDABDE", "ABCDABD"));
