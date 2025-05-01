class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    
    solve(idx,adj,vis,ans){
        vis[idx]=1;
        ans.push(idx);
        for(let key of adj[idx]){
            if(!vis[key]){
                this.solve(key,adj,vis,ans);
            }
        }
    }
   
    dfsOfGraph(adj) {
        // code here
        let vis=[];
        let ans=[];
        this.solve(0,adj,vis,ans);
        return ans;
    }
}
const sol=new Solution();
console.log(sol.dfsOfGraph( [[1, 2], [0, 2], [0, 1, 3, 4], [2], [2]]))