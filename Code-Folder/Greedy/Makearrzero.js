const Makezero=(arr)=>{
   var set=new Set();
   for(let i=0;i<arr.length;i++){
       if(arr[i]>0){
        set.add(arr[i])
       }
   }
   return set.size
}
// nums.sort((a, b) => a - b);
// let ops = 0;
// let prev = 0;

// for (let num of nums) {
//     if (num > prev) {
//         ops++;
//         prev = num;
//     }
// }

// return ops;

console.log(Makezero([1,5,0,3,5]))