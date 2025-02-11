const Findfreq=(arr)=>{
    return arr.reduce((acc,value)=>{
        acc[value]=(acc[value]||0)+1;
        return acc;
    },{})
}
console.log(Findfreq([1, 2, 2, 3, 3, 3]))
//another way using map=>
const Findfreq2=(arr)=>{
   const map=new Map();
   arr.forEach((x)=>{
    if(map.has(x)){
        map.set(x,map.get(x)+1)
    }else{
        map.set(x,1)
    }
   })
   return map;
}
console.log(Findfreq2([1, 2, 2, 3, 3, 3]))