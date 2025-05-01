var longestOnes = function(nums, k) {
    let end,start=0;
    let maxlen=-Infinity;
    let c=0;
    for(end=0;end<nums.length;end++){
       if(nums[end]==0){
        c++;
       }
       while(c>k){
        if(nums[start]==0){
            c--;
        }
        start++;
       }
       maxlen=Math.max(maxlen,end-start+1)
    }
    return maxlen==-Infinity?-1:maxlen;
};
// nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2 ans=6
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2))

