function helper(arr){
    if(arr.length<2)return arr[0];
    let dp=new Array(arr.length);
    dp[0]=arr[0];
    dp[1]=Math.max(arr[0],arr[1]);
    for(let i=2;i<arr.length;i++){
     dp[i]=Math.max(dp[i-2]+arr[i],dp[i-1]);
    }
    return dp[arr.length-1];
 }
 var rob = function(nums) {
     if(nums.length<2)return nums[0];
     let skipfirst=new Array(nums.length-1);
     let skiplast = new Array(nums.length-1);
     for(let i=0;i<nums.length-1;i++){
         skipfirst[i]=nums[i+1];
         skiplast[i]=nums[i];
     }
     let fres = helper(skipfirst);
     let lres = helper(skiplast);
     return Math.max(fres,lres);
 };