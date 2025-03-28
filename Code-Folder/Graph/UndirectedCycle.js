class Solution {
    // Function to detect cycle in an undirected graph.
    solve(idx,par,adj,vis){
        vis[idx]=1;
        for(let key of adj[idx]){
            if(!vis[key]){
                if(this.solve(key,idx,adj,vis)){
                    return true;
                }
            }
            else if(key!=par)return true;
        }
        return false;
    }
    isCycle(adj) {
        // code here
        let vis=new Array(adj.length).fill(false);
        for(let i=0;i<adj.length;i++){
            if(!vis[i]){
                let c=this.solve(i,-1,adj,vis);
                if(c){
                    return true;
                }
            }
        }
        return false;
    }
}
const mysol=new Solution();
console.log(mysol.isCycle([[1], [0,2,4], [1,3], [2,4], [1,3]] ))
console.log(mysol.isCycle([[], [2], [1,3], [2]]))