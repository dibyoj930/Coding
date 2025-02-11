const arr=[2,4,6,78,92,34,123,233,44,232,2332,23453,23332,12201];
const max = Math.max(...arr)
console.log(max)

//using loop
const big = (arr)=>{
    let max = -Infinity;
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max
}
console.log(big(arr))