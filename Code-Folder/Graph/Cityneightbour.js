// // const minPQ = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
// //         minPQ.enqueue([start, 0]);









// var findTheCity = function (n, edges, distanceThreshold) {
//     // Initialize graph as an adjacency list
//     const graph = Array.from({ length: n }, () => []);

//     // Populate the graph with edges
//     for (const [from, to, weight] of edges) {
//         graph[from].push([to, weight]);
//         graph[to].push([from, weight]);
//     }

//     // Function to perform Dijkstra's algorithm
//     const dijkstra = (start) => {
//         const distances = new Array(n).fill(Infinity);
//         distances[start] = 0;

//         const minPQ = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
//         minPQ.enqueue([start, 0]);

//         while (!minPQ.isEmpty()) {
//             const [currNode, currDist] = minPQ.dequeue();
//             if (currDist > distances[currNode]) continue;

//             for (const [neighbor, weight] of graph[currNode]) {
//                 const newDist = currDist + weight;
//                 if (newDist < distances[neighbor]) {
//                     distances[neighbor] = newDist;
//                     minPQ.enqueue([neighbor, newDist]);
//                 }
//             }
//         }

//         return distances;
//     };

//     // Count the number of reachable cities within the threshold distance
//     const counts = new Array(n).fill(0);
//     for (let i = 0; i < n; i++) {
//         const distances = dijkstra(i);
//         counts[i] = distances.filter(dist => dist <= distanceThreshold).length;
//     }

//     // Find the city with the smallest number of reachable cities
//     let resultCity = 0;
//     for (let i = 1; i < n; i++) {
//         if (counts[i] <= counts[resultCity]) {
//             resultCity = i;
//         }
//     }

//     return resultCity;
// };
// // 