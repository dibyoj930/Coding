class Solution {
    // Function to find the smallest positive number missing from the array.
    missingNumber(arr) {
        // your code here
        let n=arr.length;
        let newar = new Array(arr.length).fill(false);
        for(let i=0;i<arr.length;i++){
            if(arr[i]>0&&arr[i]<n+1){
                newar[arr[i]]=true;
            }
        }
        for(let i=1;i<=n;i++){
            if(!newar[i]){
                return i
            }
        }
        return n+1;
    }
}
// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3