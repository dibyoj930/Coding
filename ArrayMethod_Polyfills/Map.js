Array.prototype.myMap = function(cb){
    let arr=[];
    for(let i=0;i<this.length;i++){
        arr.push(cb(this[i]))
    }
    return arr;
}

const newarr = [1,4,6,8,9,23];
const res = newarr.myMap((x)=>x**2);
console.log("result-->",res);