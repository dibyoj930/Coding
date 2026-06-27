function   findElement(arr,n){
    //code here
    let max1 = new Array(n)
    let min1 = new Array(n)
    let ans=0;
    max1[0]=arr[0]
    min1[n-1]=arr[n-1]
    for(let i=1;i<n;i++){
        max1[i]=Math.max(max1[i-1],arr[i])
    }
    for(let i=n-2;i>=0;i--){
        min1[i]=Math.min(min1[i+1],arr[i])
    }
    for(let i=1;i<n-1;i++){
        if(arr[i]==max1[i] && arr[i]==min1[i]){
            return arr[i]
        }
    }
    return -1
}
// Input: arr = [4, 2, 5, 7]
// Output: 5