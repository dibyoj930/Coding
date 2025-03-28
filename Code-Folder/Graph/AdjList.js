const readline = require('readline');

// Function to perform Depth First Search (DFS)
function Dfs(vis, i, g, count) {
    vis[i] = 1;
    count[0]++;
    for (let key of g[i]) {
        if (!vis[key]) {
            Dfs(vis, key, g, count);
        }
    }
}

// Main function to calculate time
async function Timetaken() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const ver = await new Promise(resolve => {
        rl.question("Enter the number of vertices: ", (answer) => {
            resolve(parseInt(answer));
        });
    });

    const edge = await new Promise(resolve => {
        rl.question("Enter the number of edges: ", (answer) => {
            resolve(parseInt(answer));
        });
    });

    // Initialize graph as an adjacency list
    let g = new Array(ver).fill().map(() => []);
    
    // Collect edges from the user
    for (let i = 0; i < edge; i++) {
        const ed = await new Promise(resolve => {
            rl.question(`Enter edge ${i + 1} (in the format x y): `, (answer) => {
                resolve(answer);
            });
        });

        const [x, y] = ed.split(' ').map(Number);
        g[x].push(y);
        g[y].push(x);
    }

    // Perform DFS to find connected components
    let sol = [];
    let vis = new Array(ver).fill(0); // visited array

    for (let i = 0; i < ver; i++) {
        if (!vis[i]) {
            let count = [0];
            Dfs(vis, i, g, count); // DFS from vertex i
            sol.push(count[0]); // Add the size of the connected component
        }
    }

    // Calculate the result
    let val = (ver * (ver - 1)) / 2; // Total pairs of vertices
    sol.forEach((s) => {
        let sum = (s * (s - 1)) / 2; // Subtract the pairs within each connected component
        val -= sum;
    });

    // Output the result
    console.log("The result is:", val);

    rl.close(); // Close the readline interface
}

// Start the program
Timetaken();
