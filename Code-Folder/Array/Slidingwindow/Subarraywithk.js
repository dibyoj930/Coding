var subarraysWithKDistinct = function(nums, k) {
    
    const sliding=(nums,k)=>{
        let map=new Map();
        let i=0,j=0,count=0;
        while(j<nums.length){
            map.set(nums[j],(map.get(nums[j])||0)+1);
            while(map.size>k){
                map.set(nums[i],map.get(nums[i])-1);
                if(map.get(nums[i])==0){
                    map.delete(nums[i]);
                }
                i++;
            }
            count+=j-i+1;
            j++;
        }
        return count;
    }
    return sliding(nums,k)-sliding(nums,k-1);
};
// Input: nums = [1,2,1,2,3], k = 2
// Output: 7