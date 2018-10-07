module.exports = function solveSudoku(matrix) {
  function checkEl(matrix, i, j, el) {
    let sqrRow = Math.floor(i / 3) * 3,
      sqrCol = Math.floor(j / 3) * 3;
    for (let col = 0; col < 9; col++) {
      if (col != j && matrix[i][col] == el) {
        return false;
      }
    }
    for (let row = 0; row < 9; row++) {
      if (row != i)
        if (matrix[row][j] == el) {
          return false;
        }
    }
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (row != i && col != j)
          if (matrix[sqrRow + row][sqrCol + col] == el) {
            return false;
          }
      }
    }
    return true;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (!matrix[i][j]) {
        for (let num = 1; num <= 9; num++) {
          if (checkEl(matrix, i, j, num)) {
            matrix[i][j] = num;
            resolve = solveSudoku(matrix);
            if (resolve) {
              return matrix;
            }
            matrix[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}