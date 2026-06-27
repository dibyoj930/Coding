var sortColors = function(nums) {
    let l=0,mid=0;h=nums.length-1;
    while(mid<=h){
        if(nums[mid]===0){
            [nums[mid],nums[l]]=[nums[l],nums[mid]];
            mid++;
            l++;
        }else if(nums[mid]==1){
            mid++;
        }else{
             [nums[mid],nums[h]]=[nums[h],nums[mid]];
             h--;
        }
    }
    return nums;
};