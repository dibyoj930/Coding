class Solution{
    solve(vis,i,adj,order){
        vis[i]=1;
        order[i]=1;
        for(let key of adj[i]){
            if(!vis[key]){
                let ans=this.solve(vis,key,adj,order);
                if(ans==true){
                    return true;
                }
            }
            else if(order[key])return true;
        }
        order[i]=0;
        return false;
    }
    isCyclic(adj) {
        // code here
        let v=adj.length;
          let vis = new Array(v).fill(0);  // Initialize visited array with 0s
        let order = new Array(v).fill(0);
        
        for(let i=0;i<v;i++){
            if(!vis[i]){
                let c=this.solve(vis,i,adj,order);
                if(c==true){
                    return true;
                }
            }
          
        }
        return false;
    }
}
const sol=new Solution();
console.log(sol.isCyclic([[1,2,4],[0],[0,3],[2,4],[0,3]]));