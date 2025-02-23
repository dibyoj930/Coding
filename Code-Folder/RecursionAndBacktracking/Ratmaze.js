

function FindPath(m,n){
    const visited = Array.from({length:n},()=>Array(n).fill(0));
    const res=[];
    function findPath(m,r,c,s){
        if(r==n-1&&c==n-1){
            res.push(s);
            return;
        }else{
            visited[r][c]=1;
        }
        if(r+1<n&&!visited[r+1][c]&&m[r+1][c]==1){
            
            findPath(m,r+1,c,s+"D");
           
        }
        if(r-1>=0&&!visited[r-1][c]&&m[r-1][c]==1){
            findPath(m,r-1,c,s+"U")
        }
        if(c+1<n&&!visited[r][c+1]&&m[r][c+1]==1){
            findPath(m,r,c+1,s+"R")
        }
        if(c-1>=0&&!visited[r][c-1]&&m[r][c-1]==1){
            findPath(m,r,c-1,s+"L")
        }
        visited[r][c]=0;
    }
    if(m[0][0]==0){
        return res.length==0?-1:res;
    }
    findPath(m,0,0,"");
     return res.length==0?-1:res;
}
console.log(FindPath([[1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]],4))