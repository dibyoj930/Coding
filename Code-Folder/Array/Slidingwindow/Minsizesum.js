var minSubArrayLen = function(target, nums) {
    let minlength=Infinity;
    let end,start=0;
    let curr=0;
    for(end=0;end<nums.length;end++){
        curr+=nums[end];
        while(curr>=target){
            minlength=Math.min(minlength,end-start+1);
            curr-=nums[start]
            start++;
        }
    }
    return minlength==Infinity?0:minlength;
};
// target = 7, nums = [2,3,1,2,4,3]