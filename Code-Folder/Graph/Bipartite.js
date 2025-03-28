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

console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]]))