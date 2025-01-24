//You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
//Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:
//0 <= j <= nums[i] and
//i + j < n
//Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
//Input: nums = [2,3,1,1,4]
// Output: 2
//---------solution------------
//for this one we have to remember that to go to any index of the array
// [0,1,2,3] here to go from 0 to 2 we need atleast that index+1 value means 2+1=3
//we have to keep a curr and maxreach we have to update that base on the above condition
var maxnumJump=(arr)=>{
    let curr=0,maxreach=0;
    let res=0;
    for(let i=0;i<arr.length-1;i++){
        maxreach = Math.max(maxreach,i+arr[i]);
        if(i===curr){
            res++;
            curr=maxreach;
        }
    }
    return res;
}
console.log("jumps-->",maxnumJump([2,3,1,1,4]))