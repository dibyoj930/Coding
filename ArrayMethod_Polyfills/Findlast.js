//find the last element satisfied the condition
Array.prototype.findLast = function(callback){
    if(this==null)throw new TypeError('error');
    for(let i=this.length-1;i>=0;i--){
        if(callback(this[i],i,this)){
            return this[i];
        }
    }
    return -1;
}
const data = [2,4,6,8,10,23,20,40,60,21,27,30];
console.log(data.findLast(x=>x%4==0))