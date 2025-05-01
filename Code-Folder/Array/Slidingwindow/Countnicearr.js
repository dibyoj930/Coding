var numberOfSubarrays = function(nums, k) {
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2){
            nums[i]=1;
        }else{
            nums[i]=0;
        }
    }
    let map=new Map();
    map.set(0,1);
    let res=0;
    let pre=0;
    for(let i=0;i<nums.length;i++){
        pre+=nums[i];
        res+=map.get(pre-k)||0;
        map.set(pre,(map.get(pre)||0)+1);
    }
    return res;
};
// Input: nums = [1,1,2,1,1], k = 3
// Output: 2
// Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
// Output: 16