// Function to create the reverse graph
function createReverseGraph(graph, V) {
    const reverseGraph = Array(V).fill().map(() => []);
    
    // Loop through all edges in the graph and create reverse edges
    for (let u = 0; u < V; u++) {
        for (let v = 0; v < V; v++) {
            if (graph[u][v] === 1) {
                reverseGraph[v].push(u);  // Add reverse edge
            }
        }
    }
    
    return reverseGraph;
}

// Function to check if the graph is bipartite
function dfs(i,par,col,graph,vis,f){
    vis[i]=col;
    for(let key of graph[i]){
        if(vis[key]==-1){
            dfs(key,i,3-col,graph,vis,f);
        }else if(key!==par && vis[key]==col){
            f.val=1;
           return;
        }
    }
}
function isBipartite(graph) {
    let vis=new Array(graph.length).fill(-1);
    let f={val:0};
   
          for (let i = 0; i < graph.length; i++) {
        if (vis[i] === -1) { 
            dfs(i, -1, 1, graph, vis, f);
        }
        if (f.val === 1) return false; 
    }

    return true;
  
   
};

// Main function to check if the graph can be divided into two cliques
function canBeDividedIntoTwoCliques(graph) {
    const V = graph.length; // Number of vertices in the graph

    // Step 1: Create the reverse graph
    let dummy=new Array(V).fill(0);
    
    const reverseGraph = createReverseGraph(graph, V);

    // Step 2: Check if the reverse graph is bipartite
    if (isBipartite(reverseGraph)) {
        return "Yes";
    } else {
        return "No";
    }
}

// Example usage:
const graph = [
    [0, 1, 1, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0]
];

console.log(canBeDividedIntoTwoCliques(graph)); // Output: Yes
