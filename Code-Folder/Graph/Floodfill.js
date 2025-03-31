function dfs(i,j,vis,image,col,x,y,old){
    if(i<0||j<0||i>=x||j>=y)return;
    if(vis[i][j]||image[i][j]!=old)return;
    vis[i][j]=1;
    image[i][j]=col;
    dfs(i+1,j,vis,image,col,x,y,old);
    dfs(i-1,j,vis,image,col,x,y,old);
    dfs(i,j+1,vis,image,col,x,y,old);
    dfs(i,j-1,vis,image,col,x,y,old);
}
var floodFill = function(image, sr, sc, color) {
   
   let x=image.length;
   let y=image[0].length;
   let vis=new Array(x).fill().map(() => new Array(y).fill(false));
   let oldcol=image[sr][sc];
   dfs(sr,sc,vis,image,color,x,y,oldcol);
   return image
}
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2))