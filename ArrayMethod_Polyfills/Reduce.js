Array.prototype.myReduce = function(cb,initial){
     let acc = initial;
     for(let i=0;i<this.length;i++){
        acc=acc?cb(this[i],acc,i):this[i]
    }
    return acc;
}

const arr = [2,3,5,6,8,9]
const res = arr.myReduce((acc,initial)=>acc+initial,0)
console.log("res-->",res)