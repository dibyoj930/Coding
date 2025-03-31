class Solution {
    // Function to return list containing vertices in Topological order.
    topologicalSort(adj) {
        // code here
       let ans=[];
       let vis=new Array(adj.length).fill(0);
       let que=[];
       for(let i=0;i<adj.length;i++){
         for(let key of adj[i]){
             vis[key]++;
         }
       }
       for(let i=0;i<adj.length;i++){
        if(vis[i]==0)que.push(i)
       }
      while(que.length>0){
        let el=que.shift();
        ans.push(el);
        for(let key of adj[el]){
            vis[key]--;
            if(vis[key]==0)que.push(key);
        }
      }
      return ans
    }
}
const sol=new Solution();
console.log(sol.topologicalSort([[], [3], [3], [], [0,1], [0,2]] ))

