// You are given an integer array arr. You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

var minSetSize = function(arr) {
    let mymap=new Map();
    let len=0;
    for(let i=0;i<arr.length;i++){
        mymap.set(arr[i],(mymap.get(arr[i])||0)+1)
    }
    let ans=[],values=Array.from(mymap.entries()).sort((a,b)=>b[1]-a[1]);
    for(let i=0;i<values.length;i++){
        let [num,occur]=values[i];
        len+=occur;
       ans.push(num);
          if(len>=(arr.length/2))
            break;
        
        
      
    }
    return ans.length;
};
// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2