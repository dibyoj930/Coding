var twoSum = function(nums, target) {
    let map=new Map();
    let ans=[];
    for(let i=0;i<nums.length;i++){
        
         map.set(nums[i],i+1);
        if(map.get(target-nums[i])){
            console.log(i);
            ans.push(map.get(target-nums[i])-1,i);
        }
    }
    return ans;
    
};

console.log(twoSum([2,7,11,15],9))

console.log("maxsubarray-->");
var maxSubArray = function(nums) {
    let curr=0;
    let max=0;
    for(let i=0;i<nums.length;i++){
        curr+=nums[i];
        if(curr<0){
            curr=nums[i];
        }
        max=Math.max(curr,max);
    }
    return max;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

class Solution {
    countSubarrays(arr, k) {
        // code here
        let map=new Map();
        let curr=0;
        let ans=0;
        map.set(0,1);
        for(let i=0;i<arr.length;i++){
            curr+=arr[i];
            if(map.has(curr-k)){
                ans+=map.get(curr-k);
            }
            map.set(curr,(map.get(curr)||0)+1)
        }
        return ans;
    }
}
//Longest Substring Without Repeating Characters
function Substr(s){
    let set=new Set();
    let ans=0;
    let star=0,end;
    for(end=0;end<s.length;end++){
        while(set.has(s[end])){
            set.delete(s[star]);
            star++;
        }
        set.add(s[end]);
        ans = Math.max(ans,end-star+1);
    }
}
// Reverse a Linked List
// Merge Two Sorted Lists
// Detect Cycle in Linked List (Floyd’s Cycle Detection)
// Remove Nth Node From End of List
// Reorder List

//anagram

var groupAnagrams = function(s,t) {
    let fun=new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        console.log(s.charCodeAt(i)-'a'.charCodeAt(0));
        console.log('a'.charCodeAt(0))
        fun[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        fun[t.charCodeAt(i)-'a'.charCodeAt(0)]--;
    }
    for(let i=0;i<s.length;i++){
        if(fun[i]!=0){
            return false;
        }
    }
    return true;
};
console.log(groupAnagrams("anagram","nagaram"))
//group anagram



//invert 

//serialize - deserialize binary tree

