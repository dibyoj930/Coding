function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
  }
  
  console.log(findMedian([3, 1, 2, 5, 4])); // 3

//intersection of two arrays
function intersection(arr,arr2){
    return arr.filter((x)=>arr2.includes(x))
}
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]))
//remove specific
console.log([1,2,3,4,5].filter((x)=>x!==3))
