const Frequent = (nums,k)=>{
    let map=new Map();
    for(let i of nums){
     let value=i;
     map.set(value,(map.get(value)||0)+1)
    }
    let arr=[];
    map = [...map].sort((a,b)=>b[1]-a[1])
    let newmap = new Map(map)
    for(let [key,val] of newmap.entries()){
        arr.push(key)
    }
   
   return arr.slice(0,k)
}
console.log(Frequent([1,1,2,2,3,3,4,4,4,6,6,6,7,7],3))