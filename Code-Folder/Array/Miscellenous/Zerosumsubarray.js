function  findSubarray(arr) {
    // code here.
     let map=new Map();
     let c=0;
     let sum=0;
    for(let i=0;i<arr.length;i++){
         sum+=arr[i];
         if(sum==0){
             c++;
         }
         if(map.get(sum)){
             c+=map.get(sum);
         }
         if(!map.has(sum)){
             map.set(sum,1);
         }else{
             map.set(sum,map.get(sum)+1)
         }
    }
    return c;
}

// Input: arr[] = [0, 0, 5, 5, 0, 0]
// Output: 6