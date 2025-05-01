var nextGreaterElements = function(nums) {
    let stack=[];
    let n=nums.length;
    let ans=new Array(n).fill(0);
    for(let i=2*nums.length-1;i>=0;i--){
        while(stack.length&&nums[stack[stack.length-1]]<=nums[i%n]){
            stack.pop();
        }
        ans[i%n]=stack.length>0?nums[stack[stack.length-1]]:-1;
        stack.push(i%n);

    }
    return ans;
};
// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]