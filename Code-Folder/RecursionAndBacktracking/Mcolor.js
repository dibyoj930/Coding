function isSafe(node, color, graph, n, col) {
    for (let k = 0; k < n; k++) {
      if (k !== node && graph[k][node] === 1 && color[k] === col) {
        return false;
      }
    }
    return true;
  }
  
  function solve(node, color, m, N, graph) {
    if (node === N) {
      return true;
    }
  
    for (let i = 1; i <= m; i++) {
      if (isSafe(node, color, graph, N, i)) {
        color[node] = i;
        if (solve(node + 1, color, m, N, graph)) {
          return true;
        }
        color[node] = 0;
      }
    }
    return false;
  }
  
  // Function to determine if graph can be colored with at most M colors such
  // that no two adjacent vertices of the graph are colored with the same color.
  function graphColoring(graph, m, N) {
    const color = Array(N).fill(0);
    return solve(0, color, m, N, graph);
  }
  
  const N = 4;
  const m = 3;
  const graph = Array(N).fill(null).map(() => Array(N).fill(false));
  
  // Edges are (0, 1), (1, 2), (2, 3), (3, 0), (0, 2)
  graph[0][1] = graph[1][0] = true;
  graph[1][2] = graph[2][1] = true;
  graph[2][3] = graph[3][2] = true;
  graph[3][0] = graph[0][3] = true;
  graph[0][2] = graph[2][0] = true;
  
  console.log(graphColoring(graph, m, N));
  