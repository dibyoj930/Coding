var findOrder = function(numCourses, prerequisites) {
    let adj=Array.from({ length: numCourses }, () => [])
    let ans=[];

    for(let [key,val] of prerequisites){
        adj[val].push(key)
    }
    let indegree=new Array(numCourses).fill(0);
    for(let i=0;i<adj.length;i++){
        for(let key of adj[i]){
            indegree[key]++;
        }
    }
    let q=[];
    for(let i=0;i<indegree.length;i++){
       if(indegree[i]==0){
        q.push(i)
       }
    }
    while(q.length>0){
        let a=q.shift();
         ans.push(a)
        for(let key of adj[a]){
            indegree[key]--;
            if(indegree[key]==0){
                q.push(key)
            }
        }
    }
   return ans.length==numCourses?ans:[];
};

// numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]] input