/**
 *字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
案例:
s = "leetcode"
返回 0.
s = "loveleetcode",
返回 2.
注意事项：您可以假定该字符串只包含小写字母。
链接：https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/34/
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (let v of s) {
    if (s.indexOf(v) === s.lastIndexOf(v)) {
      return s.indexOf(v);
    }
  }
  // 其他边缘情况，比如空字符串"",只有相同的字符"cc",都返回-1
  // other situation, like empty string "", no non-repeating character "cc", all return -1
  return -1;
};

console.log(firstUniqChar("loveleetcode"));

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 */
