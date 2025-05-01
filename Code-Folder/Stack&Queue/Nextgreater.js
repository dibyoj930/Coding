var nextGreaterElement = function(nums1, nums2) {
    let map=new Map();
    let stack=[];
    for(let k of nums2){
        while(stack.length&&stack[stack.length-1]<k){
            map.set(stack[stack.length-1],k);
            stack.pop();
        }
        stack.push(k);
    }
    let ans=[]
    for(let key of nums1){
        if(map.has(key)){
            ans.push(map.get(key));
        }else{
            ans.push(-1);
        }
    }
    return ans;
};
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]