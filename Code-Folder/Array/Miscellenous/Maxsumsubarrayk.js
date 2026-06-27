//brute force
function  maximumSumSubarray(arr, k) {
    // code here
    let maxsum=-Infinity;
    for(let i=0;i<=arr.length-k;i++){
        let sum=0;
        for(let j=0;j<i+k;j++){
           sum+=arr[j];
        }
        maxsum=Math.max(sum,maxsum);
    }
    return maxsum;
}

//using sliding window kind off
function maximumSumSubarray2(arr,k){
    if(arr.length<k)return;
    let max=0;
    for(let i=0;i<k;i++){
        max+=arr[i];
    }
    let maxwindow=max;
    for(let i=k;i<arr.length;i++){
       maxwindow = maxwindow+arr[i]-arr[i-k];
       max=Math.max(maxwindow,max)
    }
    return max
}