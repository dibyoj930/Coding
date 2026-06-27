var fillCups = function(amount) {
    // Simulate a max-heap using a custom sort
    const maxHeap = amount.filter(x => x > 0);

    let c = 0;
    while (maxHeap.length > 1) {
        // Sort to simulate max-heap (largest values at end)
        maxHeap.sort((a, b) => a - b);

        let a = maxHeap.pop() - 1; // largest
        let b = maxHeap.pop() - 1; // second largest

        c++;

        if (a > 0) maxHeap.push(a);
        if (b > 0) maxHeap.push(b);
    }

    // Add remaining if any
    if (maxHeap.length) c += maxHeap[0];

    return c;
};
