/**
 * 验证回文字符串
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。
示例 1:
输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:
输入: "race a car"
输出: false
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/36/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  // 去掉字母数字外其他符号，转换为小写
  s = s.replace(/\W|_/g, "").toLowerCase();
  let i = 0;
  // 遍历一半即可
  while (i < (s.length - 1) / 2) {
    if (s.charAt(i) !== s.charAt(s.length - 1 - i)) {
      return false;
    }
    i++;
  }
  return true;
};

console.log(isPalindrome("Amanaplana canalPanama"));

/**
 * 时间复杂度：O(N)
 * 空间复杂度：O(1)
 */
