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
var minimumEffortPath = function(heights) {
    let m=heights.length;
    let n=heights[0].length;
    let vis=new Array(m).fill().map(()=> new Array(n).fill(Infinity))
    vis[0][0]=0;
    let pq=new MinHeap();
    pq.push([0,[0,0]]);
    let dr=[1,0,0,-1];
    let dc=[0,1,-1,0];

    while(pq.size()){
        let [a,b]=pq.pop();
        let dist=a;
        let r=b[0];
        let c=b[1];
         if(r==m-1&&c==n-1)return dist;
        for(let i=0;i<4;i++){
            let nr=r+dr[i];
            let nc=c+dc[i];
            if(nr>=0&&nc>=0&&nr<m&&nc<n){
                let neweffort=Math.max(Math.abs(heights[r][c]-heights[nr][nc]),dist);
                if(neweffort<vis[nr][nc]){
                    vis[nr][nc]=neweffort;
                    pq.push([neweffort,[nr,nc]])
                }
            }
        }
    } 
    return 0;
};

// heights = [[1,2,2],[3,8,2],[5,3,5]] ans -> 2