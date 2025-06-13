Array.prototype.myForeach = function(cb){
    for(let i=0;i<this.length;i++){
        cb(this[i])
    }
}
const arr = [2,4,6,8,9,7,3];
const res = arr.myForeach((x)=>console.log(x**2))
console.log("res-->",res)