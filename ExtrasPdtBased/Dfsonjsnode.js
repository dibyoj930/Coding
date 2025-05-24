function dfs(node) {
    if (!node) return;
  
    if (node.nodeType === 1) { // Element node
      console.log(node.tagName.toLowerCase());
    }
  
    for (let child of node.children) {
      dfs(child);
    }
  }
  
  // Example usage:
  dfs(document.body); 