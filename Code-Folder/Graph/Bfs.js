class Solution {
    // Function to return Breadth First Traversal of the given graph.
    bfsOfGraph(adj) {
        // code here
        let q=[0];
        let vis=[];
        vis[0]=1;
        let ans=[];
        while(q.length){
            let el=q.shift();
            ans.push(el);
            for(let x of adj[el]){
                if(!vis[x]){
                    vis[x]=1;
                    q.push(x);
                }
            }
        }
        return ans;
        
    }
}
const sol=new Solution();
const ans=sol.bfsOfGraph( [[2,3,1], [0], [0,4], [0], [2]])
console.log(ans)