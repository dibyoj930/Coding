const array=[1, 2, 2, 3, 3, 3,5,6,6,7,8,8]
const findrepeat=(arr)=>{
    let map={};
    let res=[]
    arr.forEach((x)=>{
        if(map[x]){
            map[x]++;
        }else{
            map[x]=1
        }
    })
   
    for(const key of Object.keys(map)){
        if(map[key]>1){
          res.push(Number(key))
        }
    }
    return res;
}
// console.log(findrepeat(array));

const findrepeatnumber=(arr)=>{
    const obj = arr.reduce((acc,value)=>{
        acc[value]=(acc[value]||0)+1;
        return acc;
    },{})
    return Object.keys(obj).filter((key)=>obj[key]>1).map((x)=>Number(x))
}
console.log(findrepeatnumber(array))