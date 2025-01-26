// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.
//nums = [2,3,1,1,4]
//nums = [3,2,1,0,4]
//-----solution-------
//this is another type of question from jump game here I have to just findout whether it's possible
// to reach to the end. Here need to start at end and check if my curr value is less than or equal to the current index + value at that index
var Reachtillend = (arr)=>{
    let curr=arr.length-1;
    for(let i=arr.length-2;i>=0;i--){
        if(curr<=arr[i]+i){
            curr=i;
        }
        if(curr==0)return true;
    }
    return false;
}


console.log("reach till end ",Reachtillend([2,3,1,1,4]))
console.log("reach till end ",Reachtillend([3,2,1,0,4]))
