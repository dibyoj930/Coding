 function maxStep(arr) {
    // your code here
    let ans=0;
    let c=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
           c++;
           ans=Math.max(ans,c);
        }else{
           c=0;
        }
    }
    return ans;
}

// Input: arr[] = [1, 2, 3, 4]
// Output: 3
