// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
// In one move, you can increment n - 1 elements of the array by 1.
// Input: nums = [1,2,3]
// Output: 3
const Equal = (arr) => {
    let small = Math.min(...arr);
    small *= arr.length;
    let sum = 0;
    for (let i of arr) {
      sum += i;
    }
    return sum - small;
  };
  
  const result = Equal([1, 2, 3]);
  console.log(result);