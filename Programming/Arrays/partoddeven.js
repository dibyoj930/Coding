const part=(arr)=>{
    const odd=arr.filter((x)=>x%2!==0);
    const even=arr.filter((z)=>z%2==0);
    return [...odd,...even]
}
console.log(part([1, 2, 3, 4, 5]))