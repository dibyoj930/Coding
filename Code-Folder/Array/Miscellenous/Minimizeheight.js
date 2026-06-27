function getMinDiff(arr, k) {
    // code here
    arr.sort((a,b)=>a-b);
    let ans = arr[arr.length-1]-arr[0];
    for(let i=1;i<arr.length;i++){
        let min  = Math.min(arr[0]+k,arr[i]-k);
        let max = Math.max(arr[arr.length-1]-k,arr[i-1]+k);
        ans = Math.min(ans,max-min);
    }
    return ans;
}
// Input: arr[] = [1, 5, 8, 10], k = 2
// Output: 5
// Input: arr[] = [3, 9, 12, 16, 20], k = 3
// Output: 11