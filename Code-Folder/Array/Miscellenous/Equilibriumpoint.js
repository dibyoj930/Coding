function  findEquilibrium(arr) {
    // code here
     let ans=-1;
    let sum=0;
    let k=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    for(let i=0;i<arr.length;i++){
        k+=arr[i];
        if(k==sum)return i;
        sum-=arr[i]
    }
    return ans;
}
// Input: arr[] = [1, 2, 0, 3]
// Output: 2 