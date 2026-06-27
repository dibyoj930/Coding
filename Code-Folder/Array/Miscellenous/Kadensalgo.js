function maxSubarraySum(arr) {
    // Your code here
    let curr=0;
    let max=-Infinity;
    for(let i=0;i<arr.length;i++){
        curr+=arr[i];
        if(max<curr){
            max=curr;
        }
        if(curr<0){
            curr=0;
        }
    }
    return max;
}