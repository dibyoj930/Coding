//custom reverse function
const CustomRev = (arr)=>{
    if(!Array.isArray(arr)){
        throw new TypeError('Please Provide an Array!')
    } 
    let len=arr.length;
    let mid=Math.floor(len/2)
    for(let i=0;i<mid;i++){
        let temp=arr[i];
        arr[i]=arr[len-i-1];
        arr[len-i-1]=temp
    }
    return arr;
}
console.log("Result->",CustomRev([3,6,7,8,9,21,23]))