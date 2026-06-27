const FastPriorityQueue = require('fastpriorityqueue');

class Solution {
    dijkstra(V, Adj, S) {
        const distance = Array.from({ length: V }, () => Infinity); // Initialize distances as Infinity
        const queue = []; // Normal queue (FIFO)

        distance[S] = 0; // Distance to the source is 0
        queue.push({ node: S, distance: 0 }); // Add the source node to the queue

        while (queue.length > 0) {
            // Sort the queue to get the node with the smallest distance
            queue.sort((a, b) => a.distance - b.distance);

            const { node, distance: currentDist } = queue.shift(); // Get the node with the smallest distance

            // If the current distance is greater than the recorded distance, skip processing
            if (currentDist > distance[node]) continue;

            // Explore neighbors of the current node
            for (let [neighbor, dist] of Adj[node]) {
                const newDist = currentDist + dist;

                // If a shorter path is found, update the distance and add the neighbor to the queue
                if (newDist < distance[neighbor]) {
                    distance[neighbor] = newDist;
                    queue.push({ node: neighbor, distance: newDist });
                }
            }
        }
        return distance; // Return the final distance array
    }
}
const adjList = [
    [[1, 1], [2, 4]], // Neighbors of node 0: (1, distance 1), (2, distance 4)
    [[0, 1], [2, 2], [3, 5]], // Neighbors of node 1: (0, distance 1), (2, distance 2), (3, distance 5)
    [[0, 4], [1, 2], [3, 1]], // Neighbors of node 2: (0, distance 4), (1, distance 2), (3, distance 1)
    [[1, 5], [2, 1]] // Neighbors of node 3: (1, distance 5), (2, distance 1)
];

const solution = new Solution();
const distances = solution.dijkstra(4, adjList, 0);
console.log(distances); 
// const distance = Array.from({ length: V }, () => Infinity); // Initialize distances as Infinity
// const pq = new FastPriorityQueue((a, b) => a.distance < b.distance); // Min-heap priority queue

// distance[S] = 0;  // Distance to the source is 0
// pq.add({ node: S, distance: 0 }); // Add the source node to the priority queue

// while (!pq.isEmpty()) {
//     const { node, distance: currentDist } = pq.poll(); // Get the node with the smallest distance

//     // If the current distance is greater than the recorded distance, skip processing
//     if (currentDist > distance[node]) continue;

//     // Explore neighbors of the current node
//     for (let [neighbor, dist] of Adj[node]) {
//         const newDist = currentDist + dist;

//         // If a shorter path is found, update the distance and add the neighbor to the queue
//         if (newDist < distance[neighbor]) {
//             distance[neighbor] = newDist;
//             pq.add({ node: neighbor, distance: newDist });
//         }
//     }
// }

// return distance; // Return the final distance array