// Given an integer array nums, return the number of subarrays filled with 0.
// A subarray is a contiguous non-empty sequence of elements within an array.
// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Input: nums = [0,0,0,2,0,0]
// Output: 9
const Zeroarray = (array) => {
    let count = 0;
    let ans = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == 0) {
        count++;
        ans += count;
      } else {
        count = 0;
      }
    }
    return ans;
  };
  const res = Zeroarray([1, 3, 0, 0, 2, 0, 0, 4]);
  console.log(res);