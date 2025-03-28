function Finish(numtask,pre){
    const Graph=new Array(numtask).fill().map(()=>[]);
    const indegree=new Array(numtask).fill(0);
    pre.forEach((edge)=>{
        Graph[edge[0]].push(edge[1]);
        indegree[edge[1]]++;
    })
    let que=[];
    for(let i=0;i<numtask;i++){
        if(indegree[i]==0){
             que.push(i);
        }
    }
    while(que.length){
        let el=que.shift();
        for(let key of Graph[el]){
            indegree[key]--;
            if(indegree[key]==0){
                que.push(key);
            }
        }
    }
    for(let i=0;i<numtask;i++){
        if(indegree[i]!==0){
            return false;
        }
    }
    return true;
}

const numTasks = 4;
const prerequisites = [
    [1, 0],
    [2, 1],
    [3, 2]
];
 
if (Finish(numTasks, prerequisites)) {
    console.log("Possible to finish all tasks");
} else {
    console.log("Impossible to finish all tasks");
}