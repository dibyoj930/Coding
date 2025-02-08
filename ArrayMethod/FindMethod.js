//given an array find the element that satiesfied the condition passed.

Array.prototype.findnum = function(callback){
    if(this==null){
        throw new TypeError("error!")
    }
    console.log(this)
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            console.log(i)
            return this[i]
        }
    }
    return undefined;
}
const arr = [3,5,7,9,2,34,37,4,20];
const res = arr.findnum((x)=>x%17==0);
console.log("res->",res)