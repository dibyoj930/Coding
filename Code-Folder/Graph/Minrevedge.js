class Solution {
    // Function to find the minimum number of edge reversals
    minimumEdgeReversal(edges, n, src, dst) {
        // Creating adjacency list for the given graph
        const g = Array.from({ length: n + 2 }, () => []);

        // Adding edges to the adjacency list
        edges.forEach(edge => {
            const [u, v] = edge;
            g[u].push([v, 0]);  // Edge from u to v without reversal (0 cost)
            g[v].push([u, 1]);  // Edge from v to u with reversal (1 cost)
        });

        // Using Dijkstra's algorithm to find the shortest path
        // from src to dst with minimum edge reversals

        // Creating a priority queue (min-heap) to store the vertices with their distances
        // JS doesn't have a built-in priority queue, but we can simulate it with an array and sorting
        let pq = [];
        // Creating a vector to store the distances of all vertices from src
        let dis = Array(n + 1).fill(Infinity);
        
        // Setting the distance of the source vertex to 0
        dis[src] = 0;
        // Inserting the source vertex into the priority queue
        pq.push([0, src]);

        // Performing Dijkstra's algorithm
        while (pq.length > 0) {
            // Sorting the priority queue (min-heap simulation)
            pq.sort((a, b) => a[0] - b[0]);  // Sort by distance
            const [w1, u] = pq.shift();  // Extract the vertex with the smallest distance

            // Iterating over the neighbors of the current vertex
            g[u].forEach(([v, w2]) => {
                // Updating the distance of the neighbor if a shorter path is found
                if (w1 + w2 < dis[v]) {
                    dis[v] = w1 + w2;
                    // Inserting the neighbor into the priority queue
                    pq.push([dis[v], v]);
                }
            });
        }

        // If the distance to the destination vertex is still Infinity,
        // this means that there is no path from src to dst
        if (dis[dst] === Infinity) {
            return -1;
        }

        // Returning the distance of the destination vertex from src
        return dis[dst];
    }
}

// Example Usage:
const sol = new Solution();
const edges = [[1,2],[3,2]];
const n = 3;
const src = 1;
const dst = 3;

console.log(sol.minimumEdgeReversal(edges, n, src, dst));  // Output depends on input
