Array.prototype.myFilter = function(cb){
    let arr=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            arr.push(this[i])
        }
    }
    return arr
}
const newarr = [2,3,4,5,6,17,47,32,34,78,56,21];
const res = newarr.myFilter((x)=>x%2!==0)
console.log("res--->",res)