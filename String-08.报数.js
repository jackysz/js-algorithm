/**
 * 报数
报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
注意：整数顺序将表示为一个字符串。
示例 1:
输入: 1
输出: "1"
示例 2:
输入: 4
输出: "1211"
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/39/
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let str = "1";
  while (n > 1) {
    // 出现次数
    let count = 1;
    // 最后一个字符，用于和下一个对比
    let last = str[0];
    // 每次遍历生成的新字符
    let newstr = "";
    for (let i = 1; i < str.length; i++) {
      if (last === str[i]) {
        count++;
      } else {
        newstr = newstr.concat(`${count}${last || v}`);
        last = str[i];
        count = 1;
      }
    }
    // 捕获最后一个字符
    if (count) {
      newstr = newstr.concat(`${count}${last}`);
    }
    str = newstr;
    n--;
  }
  return str;
};

console.log(countAndSay(4));
