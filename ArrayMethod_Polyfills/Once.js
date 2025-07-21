const Once = (fn)=>{
    let ran;
    let called=false;
    return function(...args){
        if(!called){
            ran = fn.apply(this,...args);
            called=true;
        }
        return ran;
    }
}
const changes = (num1,num2)=>{
    console.log("Called!",num1,num2)
}
const res = Once(changes(1,2))
res();
res()
res()