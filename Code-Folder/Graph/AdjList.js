const readline = require('readline');

// async function Create() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     const ver = await new Promise(resolve => {
//         rl.question("Enter number of vertices: ", (answer) => {
//             resolve(parseInt(answer));
//         });
//     });

//     const edge = await new Promise(resolve => {
//         rl.question("Enter number of edges: ", (answer) => {
//             resolve(parseInt(answer));
//         });
//     });

//     let graph = new Array(ver + 1).fill().map(() => []);

//     // Using a for loop to prompt for edges
//     for (let i = 0; i < edge; i++) {
//         const ed = await new Promise(resolve => {
//             rl.question(`Enter edge ${i + 1} (in the format x y): `, (answer) => {
//                 resolve(answer);
//             });
//         });

//         const [x, y] = ed.split(' ').map(Number);
//         graph[x].push(y);
//         graph[y].push(x);
//     }

//     // After all edges are entered, print the graph
//     for (let i = 0; i < ver; i++) {
//         let adjlist = graph[i].join(" ");
//         console.log(`${i} -> ${adjlist}`);
//     }

//     rl.close();
// }

// Create();
const prompt = require('prompt-sync')();

function Create() {
    // Prompt for number of vertices
    const ver = parseInt(prompt("Enter number of vertices: "));
    
    // Prompt for number of edges
    const edge = parseInt(prompt("Enter number of edges: "));
    
    // Create the graph with empty adjacency lists
    let graph = new Array(ver + 1).fill().map(() => []);
    
    // Loop through each edge and collect the vertices
    for (let i = 0; i < edge; i++) {
        const ed = prompt(`Enter edge ${i + 1} (in the format x y): `);
        const [x, y] = ed.split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);  // Since the graph is undirected
    }
    
    // After all edges are entered, print the graph
    for (let i = 0; i < ver; i++) {
        console.log(`${i} -> ${graph[i].join(" ")}`);
    }
}

Create();

