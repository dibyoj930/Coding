function dfs(i,j,vis,n,mat,val,v){
    if(i>=n||j>=n||i<0||j<0||mat[i][j]==0||vis[i][j]==1)return;
   
    if(i==n-1&&j==n-1){v.push(val)
    return;
    };
    vis[i][j]=1;
   dfs(i-1,j,vis,n,mat,val+"U",v)
   dfs(i+1,j,vis,n,mat,val+"D",v)
      dfs(i,j-1,vis,n,mat,val+"L",v)
       dfs(i,j+1,vis,n,mat,val+"R",v)
      
      vis[i][j]=0;
}
function findPath(mat) {
    // code here
    let n=mat[0].length;
    if(mat[0][0]==0||mat[n-1][n-1]==0)return [];
   
    let vis=new Array(n).fill().map(() => new Array(n).fill(0));
    let v=[];

    dfs(0,0,vis,n,mat,"",v)
    v.sort();
    return v
}
console.log(findPath( [[1, 1, 1], [1, 0, 1], [1, 1, 1]]))



