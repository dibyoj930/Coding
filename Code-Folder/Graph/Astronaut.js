const readline = require("readline");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Depth First Search (DFS) function
function Dfs(vis, i, g, count) {
  vis[i] = 1; // Mark the vertex as visited
  count[0]++; // Increment the count for the current connected component
  for (let key of g[i]) {
    if (!vis[key]) {
      Dfs(vis, key, g, count); // Recurse for connected vertices
    }
  }
}

// Main function to take input and calculate time
async function Timetaken() {
  const v = parseInt(await askQuestion("Enter the number of vertices: "));
  const e = parseInt(await askQuestion("Enter the number of edges: "));
  
  let g = Array.from({ length: v }, () => []); // Initialize graph as an adjacency list
  let edgesEntered = 0;

  // Function to ask the user for edges input recursively
  while (edgesEntered < e) {
    const edges = await askQuestion(`Enter edge ${edgesEntered + 1} (format: x y): `);
    const [x, y] = edges.split(" ").map(Number); // Parse the edge as integers
    g[x].push(y); // Add the edge in both directions (undirected graph)
    g[y].push(x);
    edgesEntered++;
  }

  // Perform DFS to find connected components
  let sol = [];
  let vis = Array.from({ length: v }).fill(0); // Initialize visited array

  for (let i = 0; i < v; i++) {
    if (!vis[i]) {
      let count = [0];
      Dfs(vis, i, g, count); // Call DFS starting from vertex i
      sol.push(count[0]); // Store the size of the connected component
    }
  }

  // Calculate the result
  let val = (v * (v - 1)) / 2; // Calculate total pairs of vertices
  sol.forEach((s) => {
    let sum = (s * (s - 1)) / 2; // Subtract the pairs within each connected component
    val -= sum;
  });

  console.log("The result is:", val); // Output the result
  rl.close(); // Close the readline interface
}

// Helper function to prompt the user and return the result as a promise
function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

// Start the program
Timetaken();
