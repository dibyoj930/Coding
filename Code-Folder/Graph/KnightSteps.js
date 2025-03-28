function KnightPaths(KnightPos, TargetPos, N){
    let x1=KnightPos[0];
    let y1=KnightPos[1];
    let x2=TargetPos[0];
    let y2=TargetPos[1];
    if(x1==x2&&y1==y2){
        return 0;
    }
    const direction=[
        [1,2],[1,-2],[-1,2],[-1,-2],
        [2,1],[-2,-1],[-2,1],[2,-1]
    ]
    let a=Array.from({length:N},()=>Array(N).fill(0))
    let que=[];
    que.push([x1-1,y1-1])
    while(que.length>0){
        let [n1,n2]=que.shift();
        for(let k of direction){
            let ni = n1+k[0];
            let nj = n2+k[1];
            if(ni>=0&&ni<N&&nj>=0&&nj<N&&a[ni][nj]==0){
                 a[ni][nj]=1+a[n1][n2];
                 que.push([ni,nj])
            }
        }
    }
    console.log(a)
    return a[x2-1][y2-1]

}
let N=6
let knightPos = [4, 5]
let targetPos= [1, 1]
console.log(KnightPaths(knightPos,targetPos,N))