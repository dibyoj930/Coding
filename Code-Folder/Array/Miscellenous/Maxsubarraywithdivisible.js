function longestSubarrayDivK(arr, k) {
    // your code here
    let map = new Map();
    let sum=0;
    let ans=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum%k==0){
            ans=i+1;
        }
        //taking mod for -ve sum values
//         let sum = -4;
// let k = 3;

// let mod = ((-4 % 3) + 3) % 3;
// // (-1 + 3) % 3 = 2 % 3 = 2
        let mod=((sum%k)+k)%k;
        
        if(map.has(mod)){
            ans=Math.max(ans,i-map.get(mod));
        }
        if(!map.has(mod)){
            map.set(mod,i);
        }
        
    }
 return ans;   
}

// Input: arr[] = [2, 7, 6, 1, 4, 5], k = 3
// Output: 4