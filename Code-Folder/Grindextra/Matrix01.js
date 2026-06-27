var updateMatrix = function(mat) {
    let m = mat.length;
  let n = mat[0].length;
  let queue = [];

 
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (mat[i][j] === 0) {
              queue.push([i, j]);
          } else {
              mat[i][j] = Infinity;
          }
      }
  }

  let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];


  while (queue.length > 0) {
      let [i, j] = queue.shift();

      for (let [di, dj] of dirs) {
          let ni = i + di;
          let nj = j + dj;

          if (
              ni >= 0 && ni < m &&
              nj >= 0 && nj < n &&
              mat[ni][nj] > mat[i][j] + 1
          ) {
              mat[ni][nj] = mat[i][j] + 1;
              queue.push([ni, nj]);
          }
      }
  }

  return mat;
};