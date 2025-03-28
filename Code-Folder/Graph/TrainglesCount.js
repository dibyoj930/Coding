function Count(){
    let v=4
    let graph=[[0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];
let isCycle=false;
let tri=0;

    for(let i=0;i<v;i++){
        for(let j=0;j<v;j++){
            for(let k=0;k<v;k++){
                if(graph[i][j]&&graph[j][k]&&graph[k][i]){
                       tri++;
                }
            }
        }
    }
   if(isCycle){
    tri/=3;
   }
   else{
    tri/=6
   }
   return tri;
}
console.log(Count())