var numSubarraysWithSum = function(nums, goal) {
    let map=new Map();
    map.set(0,1);
    let pre=0;
    let res=0;

    for(let i=0;i<nums.length;i++){
        pre+=nums[i];
        res+=map.get(pre-goal)||0;
        map.set(pre,(map.get(pre)||0)+1);
    }
    return res;
    
};
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4