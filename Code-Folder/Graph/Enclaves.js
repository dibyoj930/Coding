var numEnclaves = function(grid) {
    let m=grid.length;
    let n=grid[0].length;
    let vis=new Array(m).fill().map(()=>new Array(n).fill(0));
    let que=[];

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i==0||j==0||i==m-1||j==n-1){
                if(grid[i][j]==1){
                  vis[i][j]=1;
                  que.push([i,j])
                }
            }
        }
    }
    let drow=[-1,0,1,0];
    let dcol=[0,-1,0,1]
    while(que.length){
        let [x,y]=que.shift();
        for(let i=0;i<4;i++){
          let nrow=x+drow[i];
          let ncol=y+dcol[i]
          if(nrow>=0&&nrow<m&&ncol>=0&&ncol<n&&grid[nrow][ncol]==1&&vis[nrow][ncol]==0){
            vis[nrow][ncol]=1;
            que.push([nrow,ncol])
          }
        }

    }
    let count=0;
    for(let i=0;i<m;i++){
  for(let j=0;j<n;j++){
    if(vis[i][j]==0&&grid[i][j]==1){
        count++;
    }
  }
    }
    return count;
};
// Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]] output==>3