function rotate(matrix) {
  //transposing
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      if (i !== j) {
        let temp = matrix[j][i];
        matrix[j][i] = matrix[i][j];
        matrix[i][j] = temp;
      }
    }
  }
  /*  [3,2,1],
     [6,5,4],
     [9,8,7], */

  //swapping the elemnts

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[i].length - j - 1];
      matrix[i][matrix[i].length - j - 1] = temp;
    }
  }

  return matrix;
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
