const Makezero=(arr)=>{
   var set=new Set();
   for(let i=0;i<arr.length;i++){
       if(arr[i]>0){
        set.add(arr[i])
       }
   }
   return set.size
}

console.log(Makezero([1,5,0,3,5]))