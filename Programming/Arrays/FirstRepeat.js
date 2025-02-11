const array=[1, 2, 2, 3, 3, 3,5,6,6,7,8,8];
const first=(arr)=>{
    const obj=arr.reduce((acc,value)=>{
        acc[value]=(acc[value]||0)+1;
        return acc;
    },{})
    return Object.keys(obj).filter((x)=>obj[x]>1).map(x=>x)[0]
}
console.log(first(array))

//Non repeating
const Nonrepeat=(arr)=>{
    const obj=arr.reduce((acc,value)=>{
        acc[value]=(acc[value]||0)+1;
        return acc;
    },{})
    return Object.keys(obj).filter((x)=>obj[x]==1).map(x=>Number(x))
}
console.log(Nonrepeat(array))