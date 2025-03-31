class MinHeap {
    constructor() {
        this.heap = [];
    }

    push([node, weight]) {
        this.heap.push([node, weight]);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        const root = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return root;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][1] <= this.heap[index][1]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (index < length) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex][1] < this.heap[smallest][1]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex][1] < this.heap[smallest][1]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;

            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            index = smallest;
        }
    }

    size() {
        return this.heap.length;
    }
}

class Solution {
    spanningTree(v, adj) {
        let pq = new MinHeap();
        pq.push([0, 0]); // Start from node 0 with weight 0
        let sum = 0;
        let vis = new Array(v).fill(0);

        while (pq.size() > 0) {
            let [node, weight] = pq.pop();

            if (vis[node]) continue; // If the node is already visited, skip it
            vis[node] = 1; // Mark node as visited
            sum += weight; // Add the weight to the total sum

            // Traverse the adjacent nodes
            for (let key of adj[node]) {
                let newNode = key[0];
                let newWeight = key[1];
                if (!vis[newNode]) {
                    pq.push([newNode, newWeight]);
                }
            }
        }

        return sum; // Return the total weight of the minimum spanning tree
    }
}
const sol = new Solution();
console.log(sol.spanningTree(5, [
    [[1, 2], [2, 1]],  
    [[0, 2], [2, 3], [3, 4]],  
    [[0, 1], [1, 3], [3, 4]],  
    [[1, 4], [2, 4]]  
]));


