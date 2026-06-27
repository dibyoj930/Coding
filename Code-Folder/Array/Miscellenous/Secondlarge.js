function getSecondLargest(arr) {
    // code here
    let max=-Infinity;
    let second=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
             second=max;
            max=arr[i];
        }else if(arr[i]>second&&arr[i]<max){
            second=arr[i];
        }
    }
    return second==-Infinity?-1:second;
}
console.log(getSecondLargest( [12, 35, 1, 10, 34, 1]))

