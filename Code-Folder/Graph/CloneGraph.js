function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
 this.neighbors = neighbors === undefined ? [] : neighbors;
}
function Dfs(vis,copy,node){
    vis[copy.val]=copy;
    for(let key of node.neighbors){
        if(!vis[key.val]){
            let newnode = new Node(key.val);
            copy.neighbors.push(newnode);
            Dfs(vis,newnode,key)
        }else{
            copy.neighbors.push(vis[key.val])
        }
    }

}
function cloneGraph(node) {
    if(node==null)return null;
    let vis={};
    let copy=new Node(node.val);
    Dfs(vis,copy,node)
    return copy
};
function createGraphFromAdjList(adjList) {
    let nodes = [];
    for (let i = 0; i < adjList.length; i++) {
        nodes.push(new Node(i + 1));  // Create a new node for each index in adjList
    }
    // Now set up the neighbors based on the adjacency list
    for (let i = 0; i < adjList.length; i++) {
        for (let neighborVal of adjList[i]) {
            nodes[i].neighbors.push(nodes[neighborVal - 1]);  // -1 to adjust for 0-indexed array
        }
    }
    return nodes[0];  // Return the first node, which represents the start of the graph
}

// Example adjacency list for the graph: [[2,4],[1,3],[2,4],[1,3]]
let adjList = [[2,4],[1,3],[2,4],[1,3]];

// Create the graph from the adjacency list
let graph = createGraphFromAdjList(adjList);

// Clone the graph
let clonedGraph = cloneGraph(graph);

// For testing purposes, you can log the cloned graph
console.log(clonedGraph);
