var permute = function(nums) {
    const res=[]//store result
  const path=[]//keep track current one
  const visit=new Set()//keep visited one different
  function dfs()  {
    if(path.length===nums.length){
        res.push([...path]);
        return;
    }
    for(let i=0;i<nums.length;i++){
        if(visit.has(nums[i]))continue;

        path.push(nums[i]);
        visit.add(nums[i]);
        dfs();
        path.pop();
        visit.delete(nums[i])
    }

  }
  dfs();
  return res;
};
console.log(permute([1,2,3]))