Array.prototype.myconcat = function(){
    let newar=[];
    for(let i=0;i<this.length;i++){
        newar.push(this[i]);
    }
    for(let i=0;i<arguments.length;i++){
        let val=arguments[i];
        if(Array.isArray(val)){
            for(let i=0;i<val.length;i++){
                newar.push(val[i])
            }
        }else{
            newar.push(val)
        }
    }
    return newar;
}
const arr=[2,5,6,8];
console.log(arr.myconcat(1,2,[3,4,5]))