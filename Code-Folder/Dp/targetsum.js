var findTargetSumWays = function(nums, target) {
    let map=new Map();
    map.set(0,1);
    for(let num of nums){
        let newmap=new Map();
        for(let [sum,count] of map.entries()){
            // let count = map.get(sum);
           newmap.set(sum + num, (newmap.get(sum + num) || 0) + count);
      newmap.set(sum - num, (newmap.get(sum - num) || 0) + count);
        }
        map=newmap;
    }
    return map.get(target)||0;
    
};