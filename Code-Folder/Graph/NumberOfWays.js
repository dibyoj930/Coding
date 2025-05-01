class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return min;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        const element = this.heap[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.heap[parentIdx];
            if (element[1] >= parent[1]) break;
            this.heap[idx] = parent;
            this.heap[parentIdx] = element;
            idx = parentIdx;
        }
    }

    bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild[1] < element[1]) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild[1] < element[1]) ||
                    (swap !== null && rightChild[1] < leftChild[1])
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }

    length() {
        return this.heap.length;
    }
}

var countPaths = function (n, roads) {
    let adj = new Array(n).fill().map(() => []);
    for (let [u, v, weight] of roads) {
        adj[u].push([v, weight]);
        adj[v].push([u, weight]);
    }

    let distance = new Array(n).fill(Infinity);
    let ways = new Array(n).fill(0);
    distance[0] = 0;
    ways[0] = 1;

    let pq = new MinHeap();
    pq.push([0, 0]);

    while (pq.length()) {
        let [node, currentDist] = pq.pop();

        for (let [newNode, newDist] of adj[node]) {
            if (newDist + currentDist < distance[newNode]) {
                distance[newNode] = newDist + currentDist;
                ways[newNode] = ways[node];
                pq.push([newNode, distance[newNode]]);
            } else if (newDist + currentDist === distance[newNode]) {
                ways[newNode] += ways[node];
                ways[newNode] %= 1000000007;
            }
        }
    }

    return ways[n - 1] % 1000000007;
};
// n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
//output->4
// https://assets.leetcode.com/uploads/2025/02/14/1976_corrected.png