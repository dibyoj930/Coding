// Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.
// Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.
// Return the minimum time Bob needs to make the rope colorful.
//colors = "abc", neededTime = [1,2,3]
var Getminvalue=(arr,colors)=>{
    let res=0;
    for(let i=1;i<colors.length;i++){
        if(colors[i]===colors[i-1]){
            res+=Math.min(arr[i],arr[i-1]);
            arr[i]=Math.max(arr[i],arr[i-1])
        }
    }
    return res;
}

console.log(Getminvalue([1,2,3,4,5],"abaac"))
console.log(Getminvalue([1,2,3,4,1],"aabaa"))