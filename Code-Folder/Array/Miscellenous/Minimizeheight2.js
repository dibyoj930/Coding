function  getMinDiff(arr, k) {
    // your code here
    arr.sort((a,b)=>a-b);
    let short = arr[0];
    let large = arr[arr.length-1];
    
    let ans=large-short;
    for(let i=1;i<arr.length;i++){
        let max = Math.max(arr[arr.length-1]-k,arr[i-1]+k);
        let min = Math.min(arr[0]+k,arr[i]-k);
        if(min<0)continue;
        ans=Math.min(ans,max-min);
    }
    return ans;
}
// Input: k = 3, arr[] = {3, 9, 12, 16, 20}
// Output: 11
// Explanation: The array can be modified as {3+k, 9+k, 12-k, 16-k, 20-k} -> 
// {6, 12, 9, 13, 17}.The difference between the largest and the smallest is 17-6 = 11. 