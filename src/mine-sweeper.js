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
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  const directions = [
    [-1, -1], [-1, 0], [-1, 1], 
    [0, -1], [0, 1], 
    [1, -1], [1, 0], [1, 1]
  ];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === true) {
        for (let [dx, dy] of directions) {
          const newX = i + dx;
          const newY = j + dy;
          if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
            result[newX][newY]++;
          }
        }
      }
    }
  }

  return result;
}

module.exports = {
  minesweeper
}


module.exports = {
  minesweeper
};