// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

var minSetSize = function(arr) {
    let map=new Map();
    for(let i of arr){
     if(map.has(i)){
         map.set(i,map.get(i)+1);
     }else{
         map.set(i,1);
     }
    }
    let arr1 = [...map].sort((a,b)=>b[1]-a[1]);
    let cnt=0;
    let size=0;
    for(let [key,val] of arr1){
      ++cnt
       size+=val;
       if(size>=(arr.length/2)){
         break;
       }
       
    }
    return cnt;
 };
// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2