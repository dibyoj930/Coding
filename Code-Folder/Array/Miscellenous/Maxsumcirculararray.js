function   circularSubarraySum(arr) {
    // code here
    let maxsum=arr[0];
    let currmax=0;
    let minsum=arr[0];
    let currmin=0;
    let total=0;
    for(let el of arr){
        currmax=Math.max(el,el+currmax)
        maxsum=Math.max(maxsum,currmax);
        currmin=Math.min(currmin+el,el);
        minsum=Math.min(minsum,currmin);
        total+=el;
    }
    return maxsum>0?Math.max(total-minsum,maxsum):maxsum
}
// Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
// Output: 22
// Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1]
// Output: 23