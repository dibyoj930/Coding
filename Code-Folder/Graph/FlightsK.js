class MinHeap {
    constructor() {
        this.heap = [];
    }

    push([cost, node, stops]) {
        this.heap.push([cost, node, stops]);
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
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
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

            if (leftChildIndex < length && this.heap[leftChildIndex][0] < this.heap[smallest][0]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex][0] < this.heap[smallest][0]) {
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

var findCheapestPrice = function(n, flights, src, dst, k) {
    // Create graph (adjacency list)
    let g=new Array(n).fill().map(()=>[])
    for(let i=0;i<n;i++){
        for(let [src,dst,w] of flights){
            g[src].push([dst,w])
        }
    }
    let pq=new MinHeap();
    pq.push([0,0,0]);
    
    while(pq.size){
       let [idx,cost,stops]=pq.pop();
       if(idx==dst)return cost;
       if(stops>k)continue;
       for(let [ds,we] of g[idx]){
        let newweight=we+cost;
        
        pq.push([ds,newweight,stops+1])
       }
    }
    


    // let g = new Array(n).fill().map(() => []); 
    // for (let [u, v, cost] of flights) {
    //     g[u].push([v, cost]);  // g[u] stores [destination, cost]
    // }

    // // Initialize the priority queue with [cost, node, stops]
    // let pq = new MinHeap();
    // pq.push([0, src, 0]); // [cost, current node, stops]

    // // Keep track of the minimum cost at each node with up to k stops
    // let visited = Array(n).fill(Infinity);
    // visited[src] = 0;

    // while (pq.size() > 0) {
    //     let [cost, s, stops] = pq.pop();

    //     // If we reach the destination, return the cost
    //     if (s === dst) return cost;

    //     // If we've exceeded k stops, do not continue exploring this path
    //     if (stops > k) continue;

    //     // Explore neighbors
    //     for (let [nextNode, nextCost] of g[s]) {
    //         let newCost = cost + nextCost;
    //         if (newCost < visited[nextNode]) {
    //             visited[nextNode] = newCost;
    //             pq.push([newCost, nextNode, stops + 1]); // Push to pq
    //         }
    //     }
    // }

    return -1; // Return -1 if no path is found within k stops
};

//minheap needed for optimizing
console.log(findCheapestPrice(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]],0,3,1))

