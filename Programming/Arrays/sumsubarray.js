const newarr=[-2, 1, -3, 4, -1, 2, 1, -5, 4];
const sumsubarr=(arr)=>{
    let curr=arr[0];
    let maxsum=arr[0];
    for(let i=0;i<arr.length;i++){
        curr=Math.max(arr[i],curr+arr[i]);
        maxsum=Math.max(curr,maxsum)
    }
    return maxsum
}
console.log(sumsubarr(newarr))