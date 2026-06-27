function thirdLargest(arr) {
    let max = -Infinity, secmax = -Infinity, thirdmax = -Infinity;
let distinctCount = 0;

for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    

    if (val > max) {
        thirdmax = secmax;
        secmax = max;
        max = val;
    } else if (val > secmax) {
        thirdmax = secmax;
        secmax = val;
    } else if (val > thirdmax) {
        thirdmax = val;
    }
}


if (thirdmax === -Infinity) return -1;
return thirdmax;
}
// Input: arr[] = [2, 4, 1, 3, 5]
// Output: 3