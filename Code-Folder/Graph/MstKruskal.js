// const FastPriorityQueue = require('fastpriorityqueue');
class Solution {
    spanningTree(v, adj) {
        let pq = [[0, 0]] // Start from node 0 with weight 0
        let sum = 0;
        let vis = new Array(v).fill(0);
        let adjList = new Array(v).fill().map(() => []);
        for (let [u, v, weight] of adj) {
            adjList[u].push([v, weight]);
            adjList[v].push([u, weight]); // Since the graph is undirected
        }


        while (pq.length> 0) {
            pq.sort((a,b)=>a[1]-b[1])
            let [node, weight] = pq.shift();

            if (vis[node]) continue; // If the node is already visited, skip it
            vis[node] = 1; // Mark node as visited
            sum += weight; // Add the weight to the total sum

            // Traverse the adjacent nodes
            for (let key of adjList[node]) {
                let newNode = key[0];
                let newWeight = key[1];
                if (!vis[newNode]) {
                    pq.push([newNode, newWeight]);
                }
            }
        }

        return sum; // Return the total weight of the minimum spanning tree
    }
}
const sol=new Solution();
console.log(sol.spanningTree(3,[[0, 1, 5],
    [1, 2, 3],
   [0, 2, 1]]))