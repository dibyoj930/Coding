const count=(value)=>{
    let a=[];
    for(let i=0;i<value;i++){
        a.push(value-i)
    }
    return a;
}
console.log(count(10))