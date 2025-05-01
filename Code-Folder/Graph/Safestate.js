var eventualSafeNodes = function(graph) {
    let adjrev=Array.from({length:graph.length},()=>[]);
    let indegree=new Array(graph.length).fill(0);
    for(let i=0;i<graph.length;i++){
        for(let key of graph[i]){
            adjrev[key].push(i);
            indegree[i]++;
        }
    }
    let q=[];
    for(let i=0;i<indegree.length;i++){
        if(indegree[i]==0){
            q.push(i);
        }
    }
    let res=[];
    while(q.length){
        let a=q.shift();
        res.push(a);
        for(let key of adjrev[a]){
            indegree[key]--;
            if(indegree[key]==0){
                q.push(key)
            }
        }
    }
    return res.sort((a,b)=>a-b);
};
//extra space o(nlogn) for time 
//extra o(n) for space than topo sort
// graph = [[1,2],[2,3],[5],[0],[5],[],[]] ans-> 2,4,5,6