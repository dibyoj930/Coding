class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._sinkDown(0);
        }
        return max;
    }

    _bubbleUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] >= this.heap[i]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    _sinkDown(i) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < length && this.heap[left] > this.heap[largest]) largest = left;
            if (right < length && this.heap[right] > this.heap[largest]) largest = right;
            if (largest === i) break;
            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function getMinimumLatency(latencyA, latencyB, adjustmentsA, adjustmentsB) {
    const n = latencyA.length;
    const totalAdjustments = adjustmentsA + adjustmentsB;
    const heap = new MaxHeap();

    for (let i = 0; i < n; i++) {
        heap.push(Math.abs(latencyA[i] - latencyB[i]));
    }

    for (let i = 0; i < totalAdjustments; i++) {
        let max = heap.pop();
        if (max > 0) max--;
        heap.push(max);
    }

    // Now compute the totalLatency
    let totalLatency = 0;
    while (!heap.isEmpty()) {
        let d = heap.pop();
        totalLatency += d * d;
    }

    return totalLatency;
}
