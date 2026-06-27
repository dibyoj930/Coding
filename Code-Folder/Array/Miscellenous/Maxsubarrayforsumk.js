function  longestSubarray(arr, k) {
    // code here
      let map = new Map();
let sum = 0;
let maxlen = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
        maxlen = i + 1;
    }

    // Check first, always
    if (map.has(sum - k)) {
        maxlen = Math.max(maxlen, i - map.get(sum - k));
    }

    // Only store first occurrence of sum
    if (!map.has(sum)) {
        map.set(sum, i);
    }
}

return maxlen;
}
// Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
// Output: 6