/**
 *字符串中的第一个唯一字符
给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
案例:
s = "leetcode"
返回 0.
s = "loveleetcode",
返回 2.
注意事项：您可以假定该字符串只包含小写字母。
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/34/
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
};

console.log(firstUniqChar('loveleetcode'))
