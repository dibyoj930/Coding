const newarr=[1, 2, 3, 4, 5];
const rotatearr = (arr,k)=>{
    k=k%arr.length;
    return arr.slice(-k).concat(arr.slice(0,-k));
}
console.log(rotatearr(newarr,2))

const rotaterev = (arr,k)=>{
    k=k%arr.length;
    return arr.slice(k).concat(arr.slice(0,k))
}
console.log(rotaterev(newarr,2))