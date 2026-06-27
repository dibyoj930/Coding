function   totalElements(arr) {
    // your code here
    let l=0;
    let map=new Map();
    let maxlen=0;
    for(let r=0;r<arr.length;r++){
        map.set(arr[r], (map.get(arr[r]) || 0) + 1);
        while(map.size>2){
            map.set(arr[l],map.get(arr[l])-1);
            if(map.get(arr[l])==0){
                map.delete(arr[l]);
            }
            l++;
        }
        maxlen=Math.max(maxlen,r-l+1);
    }
    return maxlen;
}

// Input: arr[] = [3, 1, 2, 2, 2, 2]
// Output: 5
// Explanation: The longest subarray containing at most two distinct 
// integers is [1, 2, 2, 2, 2], which has a length of 5. The subarray 
// starts at the second element 1 and ends at the last element. It contains 
// at most two distinct integers (1 and 2)