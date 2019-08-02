/**
 * 旋转图像
给定一个 n × n 的二维矩阵表示一个图像。将图像顺时针旋转 90 度。
说明：你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

示例 1:
给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
示例 2:
给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 
原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/1/array/31/
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  const temp = matrix.flat();
  // const temp = matrix.reduce((acc, val) => acc.concat(val), []);
  const length = matrix[0].length;
  matrix.forEach((item, i) => {
    item.forEach((ele, j) => {
      item[j] = temp[length * (length - 1 - j) + i];
    });
  });
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(rotate(matrix));
console.log(matrix);

/**
解法：
如代码所示，先把二维数组扁平化为一维数组，例如，给定的
```js
matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],
```
转为：
`temp = [1, 2, 3, 4, 5, 6, 7, 8, 9]`

其实，预期的数组结构和转换后的temp数组有一个数学关系：每一项的值为  
`temp[length * (length - 1 - j) + i]`  

其中，`length`为第二层数组的长度，在这里为3，`i`为第一层循环的索引，`j`为第二层数组循环的索引  

时间复杂度：O(N)
空间复杂度：O(1)
 */
