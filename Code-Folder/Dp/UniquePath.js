var uniquePaths = function(m, n) {
    
    let grid = new Array(m).fill().map(()=>new Array(n));
   for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(i==0||j==0)grid[i][j]=1;
        else{
            grid[i][j]=grid[i-1][j]+grid[i][j-1];
        }
    }
   }
   return grid[m-1][n-1];

};
//m*n , m*n
//dfs approach -> 
// function uniquePaths(m, n) {
//     function dfs(i, j) {
//       // Reached destination
//       if (i === m - 1 && j === n - 1) return 1;
  
//       // Out of bounds
//       if (i >= m || j >= n) return 0;
  
//       // Explore right and down
//       return dfs(i + 1, j) + dfs(i, j + 1);
//     }
  
//     return dfs(0, 0);
//   }