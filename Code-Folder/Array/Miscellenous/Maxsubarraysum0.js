function maxLen(arr) {
    // code here
      let map=new Map();
    let sum=0;
    let maxl=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum==0){
            maxl=i+1;
        }
        if(!map.has(sum)){
            map.set(sum,i);
        }else if(map.has(sum)){
           maxl=Math.max(maxl,i-map.get(sum))
        }
    }
    return maxl;
}

// Input: arr[] = [15, -2, 2, -8, 1, 7, 10, 23]
// Output: 5