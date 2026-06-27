function  increment(arr, n) {
    // code here
    let i=n-1;
    let carry=1;
    while(i>=0&&carry){
     let val=arr[i]+1;
        arr[i]=val%10;
        if(val>=10){
            carry=1;
        }else{
            carry=0;
        }
        i--;
    }
    if(carry){
        arr.unshift(1);
    }
    return arr;
}
// N = 3
// arr[] = {9,9,9}
// Output: 
// 1 0 0 0