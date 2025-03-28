class Solution {
    dfs(vis, i, adj, order) {
        vis[i] = 1;
        for (let key of adj[i]) {
            if (!vis[key]) {
                this.dfs(vis, key, adj, order);
            }
        }
        order.push(i); // After visiting all neighbors, push node to the order
    }   

    rdfs(vis1, i, rev) {
        vis1[i] = 1;
        // Process all neighbors of the current node in the reversed graph
        for (let key of rev[i]) {
            if (!vis1[key]) {
                this.rdfs(vis1, key, rev);
            }
        }
    }
    kosaraju(adj) {
        // code here
        let order=[];
        let n=adj.length;
        let rev=Array.from({ length: n }, () => []);
        for(let i=0;i<adj.length;i++){
            for(let key of adj[i]){
                rev[key].push(i);
            }
        }
        let vis=[];
        for(let i=0;i<adj.length;i++){
            if(!vis[i]){
                this.dfs(vis,i,adj,order);
            }
        }
         let vis1 = Array(n).fill(0); // Visited array for reverse graph
        let col = 0;
        // Process nodes in reverse order of finishing time
        for (let i = n - 1; i >= 0; i--) {
            let node = order[i]; // Get the node from the order array
            if (!vis1[node]) {
                this.rdfs(vis1, node, rev); // Perform reverse DFS
                col++; // Increase the count of strongly connected components
            }
        }
        return col;
    }
}