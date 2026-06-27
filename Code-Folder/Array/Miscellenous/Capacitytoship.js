function isPossible(arr, capacity, days) {
    let requiredDays = 1;
    let currentLoad = 0;

    for (let weight of arr) {
        if (currentLoad + weight > capacity) {
            requiredDays++;
            currentLoad = 0;
        }
        currentLoad += weight;
    }

    return requiredDays <= days;
}

function minShipCapacity(arr, d) {
    let low = Math.max(...arr); // Can't be less than the heaviest package
    let high = arr.reduce((a, b) => a + b, 0); // Sum of all weights
    let result = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isPossible(arr, mid, d)) {
            result = mid;
            high = mid - 1; // Try smaller capacity
        } else {
            low = mid + 1; // Increase capacity
        }
    }

    return result;
}
