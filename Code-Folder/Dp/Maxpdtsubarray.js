var maxProduct = function(nums) {
    let n=nums.length;
    let leftsum=1;
    let rightsum=1;
    let ans=nums[0];
    for(let i=0;i<nums.length;i++){
        leftsum=leftsum===0?1:leftsum;
        rightsum=rightsum===0?1:rightsum;
        leftsum*=nums[i];
        rightsum*=nums[n-1-i];
        ans=Math.max(ans,Math.max(leftsum,rightsum));
    }
    return ans;

};