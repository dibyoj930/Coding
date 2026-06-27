class Solution {
    firstRepeated(arr) {
        // code here
         let map=new Map();
         let ans=-1;
        for(let i=0;i<arr.length;i++){
            if(map.get(arr[i])){
              map.set(arr[i],map.get(arr[i])+1)
            }else{
                map.set(arr[i],1)
            }
        }
        for(let i=0;i<arr.length;i++){
            if(map.get(arr[i])>1){
                return i+1;
            }
        }
        return -1;
    }
}
// Input: arr[] = [1, 5, 3, 4, 3, 5, 6]
// Output: 2
//set approach
// function firstRepeatingElement(arr) {
//     const seen = new Set();
//     let firstRepeatingIndex = -1;

//     // Traverse from end to start to find first repeating element's first occurrence
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (seen.has(arr[i])) {
//             firstRepeatingIndex = i;
//         } else {
//             seen.add(arr[i]);
//         }
//     }

//     return firstRepeatingIndex === -1 ? -1 : firstRepeatingIndex + 1; // 1-based index
// }