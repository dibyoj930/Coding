function kruskalsMST(V, edges) {
    
    // Sort all edges
    edges.sort((a, b) => a[2] - b[2]);
    
    // Traverse edges in sorted order
    const dsu = new DSU(V);
    let cost = 0;
  
    for (const [x, y, w] of edges) {
        
        // Make sure that there is no cycle
        if (dsu.find(x) !== dsu.find(y)) {
            dsu.unite(x, y);
            cost += w;
            
        }
    }
    return cost;
}

// Disjoint set data structure
class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.rank = Array(n).fill(1);
    }

    find(i) {
        if (this.parent[i] !== i) {
            this.parent[i] = this.find(this.parent[i]);
        }
        return this.parent[i];
    }

    unite(x, y) {
        const s1 = this.find(x);
        const s2 = this.find(y);
        if (s1 !== s2) {
            if (this.rank[s1] < this.rank[s2]) this.parent[s1] = s2;
            else if (this.rank[s1] > this.rank[s2]) this.parent[s2] = s1;
            else {
                this.parent[s2] = s1;
                this.rank[s1]++;
            }
        }
    }
}

const edges = [
    [0, 1, 10], [1, 3, 15], [2, 3, 4], [2, 0, 6], [0, 3, 5]
];
console.log(kruskalsMST(4, edges));

// Time Complexity: O(E * log E) or O(E * log V) 

// Sorting of edges takes O(E*logE) time. 
// After sorting, we iterate through all edges and apply the find-union algorithm. The find and union operations can take at most O(logV) time.
// So overall complexity is O(E*logE + E*logV) time. 
// The value of E can be at most O(V2), so O(logV) and O(logE) are the same. Therefore, the overall time complexity is O(E * logE) or O(E*logV)
// Auxiliary Space: O(E+V), where V is the number of vertices and E is the number of edges in the graph.