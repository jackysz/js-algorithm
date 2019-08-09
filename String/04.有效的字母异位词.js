/**
 * 有效的字母异位词
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
示例 1:
输入: s = "anagram", t = "nagaram"
输出: true
示例 2:
输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。
进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/35/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (!obj[s.charAt(i)]) {
      obj[s.charAt(i)] = 1;
    } else {
      obj[s.charAt(i)]++;
    }
  }
  for (let j = 0; j < t.length; j++) {
    if (!obj[t.charAt(j)]) {
      return false;
    } else {
      obj[t.charAt(j)]--;
    }
  }
  return Object.keys(obj).every(item => obj[item] === 0);
};
// 方法2 Solution 2
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s.charAt(i)] ? obj[s.charAt(i)]++ : (obj[s.charAt(i)] = 1);
    obj[t.charAt(i)] ? obj[t.charAt(i)]-- : (obj[t.charAt(i)] = -1);
  }
  return Object.keys(obj).every(item => obj[item] === 0);
};

console.log(isAnagram("bc", "cb"));

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
