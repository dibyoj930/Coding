function   frequencyCount(arr) {
    // code here
    let map=new Map()
    for(let val of arr){
        if(map.get(val)){
            map.set(val,map.get(val)+1);
        }else{
            map.set(val,1)
        }
    }
    let arr2=Array.from(map.keys());
    let res=new Array(arr.length).fill(0);
    for(let i=0;i<=arr2.length;i++){
        res[arr2[i]-1]=map.get(arr2[i]);
    }
    return res;
}
// Input: arr[] = [2, 3, 2, 3, 5]
// Output: [0, 2, 2, 0, 1]

function Count(arr){
   let map=new Map();
   for(let i=0;i<arr.length;i++){
    if(map.get(arr[i])){
        map.set(arr[i],map.get(arr[i])+1);
    }else{
        map.set(arr[i],1);
    }
   } 
   let res = new Array(arr.length).fill(0);
   let arr2 = Array.from(map.keys());
   for(let i=0;i<=arr2.length;i++){
    res[arr2[i]-1]=map.get(arr2[i]);
   }
}