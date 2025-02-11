const findmiss=(arr,len)=>{
    const sum=(len*(len+1))/2
    const acc = arr.reduce((acc,sum)=>acc+sum,0)
    return sum-acc;
}
console.log(findmiss([1, 2, 4, 5],5))