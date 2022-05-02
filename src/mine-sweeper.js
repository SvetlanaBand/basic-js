const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let res = [];
  matrix.forEach((mat, index) => {
    res.push([]);
    mat.forEach((m, i) => {
      let sum = 0;
      if (index != 0) matrix[index - 1][i] ? sum++ : "";
      if (index != matrix.length - 1) matrix[index + 1][i] ? sum++ : "";
      if (i != 0) matrix[index][i - 1] ? sum++ : "";
      if (i != m.length - 1) matrix[index][i + 1] ? sum++ : "";

      if (index != 0 && i != 0) matrix[index - 1][i - 1] ? sum++ : "";
      if (index != 0 && i != m.length - 1) matrix[index - 1][i + 1] ? sum++ : "";
      if (index != matrix.length - 1 && i != 0) matrix[index + 1][i - 1] ? sum++ : "";
      if (index != matrix.length - 1 && i != m.length - 1) matrix[index + 1][i + 1] ? sum++ : "";

      res[index].push(sum);
    });
  });
  return res;
}
module.exports = {
  minesweeper
};
