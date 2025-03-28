const arr= [[1, 3],
[1, 4],
[1, 5],
[2, 3],
[2, 8],
[2, 9],
[3, 6],
[4, 6],
[4, 8],
[5, 8],
[6, 7],
[7, 8],
[8, 10]]
function Time(edge,n){
    
    let adj = Array.from({ length:n}, () => []); // Array of n empty arrays
    let ans=Array.from(n).fill(0);
let indegree = Array(n).fill(0); 

for(let key of edge){
    let u=key[0]-1
    let v=key[1]-1
    adj[u].push(v);
    indegree[v]++;
}
console.log(adj)

let que=[];
for(let i=0;i<adj.length;i++){
    if(indegree[i]==0){que.push(i);
        ans[i]=1;
    }
}

while(que.length>0){
    let el=que.shift();
    for(let key of adj[el]){
        indegree[key]--;
        if(indegree[key]==0){
            ans[key]=ans[el]+1;
            que.push(key)
        }
    }
}
return  ans;
}
console.log(Time(arr,10))