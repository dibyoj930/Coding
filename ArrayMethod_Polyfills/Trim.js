String.prototype.Mytrim=function(){
    let str=this;
    let start=0;
    let end =  str.length-1;
    while(str[start]==' '&&start<=end){
        start++;
    }
    while(str[end]==' '&&end>=start){
        end--;
    }
    return str.substring(start,end+1);
}

console.log("    hello world   ".Mytrim())