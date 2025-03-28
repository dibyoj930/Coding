class Solution {
    // Function to perform topological sort using BFS
    // Returns an array representing the topological order
    topoSort(V, adj) {
      // Initialize an array to store the in-degrees of each node
      let indegree = new Array(V).fill(0);
  
      // Calculate in-degrees for each node
      for (let i = 0; i < V; i++) {
        for (let it of adj[i]) {
          indegree[it]++;
        }
      }
  
      // Initialize a queue for BFS
      let q = [];
  
      // Add nodes with in-degree 0 to the queue
      for (let i = 0; i < V; i++) {
        if (indegree[i] === 0) {
          q.push(i);
        }
      }
  
      // Array to store the topological order
      let topo = [];
  
      // Perform BFS
      while (q.length > 0) {
        let node = q.shift();
  
        // Add the node to the topological order
        topo.push(node);
  
        // Update in-degrees and add neighbors with in-degree 0 to the queue
        for (let it of adj[node]) {
          indegree[it]--;
          if (indegree[it] === 0) {
            q.push(it);
          }
        }
      }
  
      return topo;
    }
  
    // Function to find the order of characters in the alien dictionary
    findOrder(dict, N, K) {
      // Initialize an adjacency list to represent the relationships between characters
      let adj = Array.from({ length: K }, () => []);
  
      // Build the adjacency list by comparing adjacent words in the dictionary
      for (let i = 0; i < N - 1; i++) {
        let s1 = dict[i];
        let s2 = dict[i + 1];
        let len = Math.min(s1.length, s2.length);
  
        // Compare characters at the same position in adjacent words
        for (let ptr = 0; ptr < len; ptr++) {
          if (s1[ptr] !== s2[ptr]) {
            // Add an edge in the adjacency list representing the relationship between characters
            adj[s1.charCodeAt(ptr) - 'a'.charCodeAt(0)].push(s2.charCodeAt(ptr) - 'a'.charCodeAt(0));
            break; // Stop comparing as soon as a difference is found
          }
        }
      }
  
      // Perform topological sort to get the order of characters
      let topo = this.topoSort(K, adj);
  
      // Convert the topological order to a string
      let ans = '';
      for (let it of topo) {
        ans += String.fromCharCode(it + 'a'.charCodeAt(0));
      }
  
      return ans;
    }
  }
  
  // Example Usage:
  
  let solution = new Solution();
  let dict = ["caa", "aaa", "aab"];
  let N = dict.length;
  let K = 3;  // Number of characters in the alphabet (in this case, 'a', 'b', 'c')
  
  console.log(solution.findOrder(dict, N, K));  // Output: "cab"
  