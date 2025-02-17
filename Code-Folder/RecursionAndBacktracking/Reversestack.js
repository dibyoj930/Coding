//Reverse the stack
function RevRec(arr,x){
    if(arr.length==0){
        arr.push(x);
    }else{
        let val=arr[arr.length-1];
        arr.pop();
        RevRec(arr,x);
        arr.push(val)
    }
   
}
function Reverse(arr){
     if(arr.length>0){
       let a=arr[arr.length-1];
       arr.pop();
       Reverse(arr);
       RevRec(arr,a);
     }
    return arr;
}
console.log(Reverse([10,8,6,4,2]))