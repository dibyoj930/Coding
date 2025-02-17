//sort stack recursively
function insertcorrect(arr,ele){
   
    if(arr[arr.length-1]<= ele||arr.length==0){
        arr.push(ele);
    }else{
        const peek=arr[arr.length-1];
        arr.pop();
        insertcorrect(arr,ele)
        arr.push(peek)
    }
   
}
function reverse(arr){
    if(arr.length>0){
       
        const a=arr[arr.length-1];
        arr.pop();
        reverse(arr)
        insertcorrect(arr,a);
    }
}

function Sort(arr){
    reverse(arr);
    return arr
}
let res=Sort([5,4,3,2,1])
console.log(res)