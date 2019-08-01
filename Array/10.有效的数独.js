/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
数独部分空格内已填入了数字，空白格用 '.' 表示。

示例 1:
输入:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: true
示例 2:
输入:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
输出: false
解释: 除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。
     但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。

说明:
一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
给定数独序列只包含数字 1-9 和字符 '.' 。
给定数独永远是 9x9 形式的。
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/30/
 *
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  // 方法1: 一次遍历
  const row = {}; // row = {0: [], ..., 8: []}
  const column = {}; // column = {0: [], ..., 8: []}
  const box = {}; //box = {0: [], ..., 8: []}
  for (let i = 0; i < 9; i++) {
    row[i] = [];
    column[i] = [];
    box[i] = [];
  }
  return board.every((item, i) => {
    return item.every((ele, j) => {
      if (ele !== ".") {
        // 子数独分区索引
        const box_index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        // 先判断元素是否在行、列和子数独存在
        if (
          row[i].includes(ele) ||
          column[j].includes(ele) ||
          box[box_index].includes(ele)
        ) {
          return false;
        }
        // 将值分别放入行、列和子数独
        row[i].push(ele);
        column[j].push(ele);
        box[box_index].push(ele);
      }
      return true;
    });
  });
  // 方法2: 简单方法，分别遍历
  // // 行判断
  // const line = board.every(item => {
  //   const arr = item.filter(item => item !== ".");
  //   const set = new Set(item);
  //   set.delete(".");
  //   return set.size === arr.length;
  // });
  // // 列判断
  // const obj = {};
  // const col = board.every(line => {
  //   return line.every((item, i) => {
  //     if (!obj[i]) {
  //       obj[i] = [];
  //     }
  //     if (item !== "." && obj[i].includes(item)) {
  //       return false;
  //     }
  //     return obj[i].push(item);
  //   });
  // });
  // // 3*3判断
  // const subObj = {};
  // const sub = board.every((item, i) => {
  //   return item.every((ele, j) => {
  //     // 3*3子数独分区
  //     const index = Math.floor(i / 3) * 3 + Math.floor(j / 3);
  //     if (!subObj[index]) {
  //       subObj[index] = [];
  //     }
  //     if (ele !== "." && subObj[index].includes(ele)) {
  //       return false;
  //     }
  //     return subObj[index].push(ele);
  //   });
  // });
  // return line && col && sub;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board));

/**
 * 复杂度分析
 * - 时间复杂度：O(1)
 * - 空间复杂度：O(1)
 */
