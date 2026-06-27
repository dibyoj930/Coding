function findSubString(str) {
    // code here
    const totalDistinct = new Set(str).size;
const freqMap = new Map();

let start = 0;
let minLen = Infinity;
let count = 0;

for (let end = 0; end < str.length; end++) {
    const endChar = str[end];
    freqMap.set(endChar, (freqMap.get(endChar) || 0) + 1);
    
    // Count when this is the first occurrence
    if (freqMap.get(endChar) === 1) count++;

    // Try to shrink the window
    while (count === totalDistinct) {
        const windowLen = end - start + 1;
        if (windowLen < minLen) {
            minLen = windowLen;
        }

        const startChar = str[start];
        freqMap.set(startChar, freqMap.get(startChar) - 1);
        if (freqMap.get(startChar) === 0) {
            count--;
        }
        start++;
    }
}

return minLen === Infinity ? 0 : minLen;
}

// Input: str = "geeksforgeeks"
// Output: 7