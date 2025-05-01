var find132pattern = function(nums) {
    let stack=[];
    let a=-Infinity;
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]<a)return true;
        while(stack.length&&stack[stack.length-1]<nums[i]){
              a=stack[stack.length-1];
              stack.poop();
        }
        stack.push(nums[i]);
    }
    return false;

};