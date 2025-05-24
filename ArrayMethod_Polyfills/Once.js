const Once = (fn)=>{
    let ran;
    return function(...args){
        if(fn){
            ran = fn.apply(this,...args);
            fn=null;
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