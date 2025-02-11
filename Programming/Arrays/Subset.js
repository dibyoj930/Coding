const target = (arr,sum)=>{
    const map=new Map();
    const pairs=[];
    for(let i of arr){
        const diff=sum-i;
        if(map.has(diff)){
            pairs.push([diff,i])
        }
        map.set(i,true)
    }
    return pairs;
}
console.log(target([1, 2, 4, 3, 5, 7, 8, 9], 10))

