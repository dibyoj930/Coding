var totalFruit = function(fruits) {
    
    let end,start=0;
    let map=new Map();
    let max=-Infinity;
    for(end=0;end<fruits.length;end++){
      let fruit = fruits[end];
        map.set(fruit, (map.get(fruit) || 0) + 1);
      while(map.size>2){
        let first=fruits[start];
        map.set(first,map.get(first)-1);
        if(map.get(first)==0){
            map.delete(first);
        }
        start++;
      }
      max=Math.max(max,end-start+1)
       
    }
    return max==-Infinity?-1:max;
};
// fruits = [1,2,3,2,2]
// Output: 4
