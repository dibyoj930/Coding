const Memoize=(fn)=>{
    const res={};
    return function(...args){
        console.log("args->",args)
       var argscache = JSON.stringify(args);
       if(!res[argscache]){
         res[argscache]=fn.call(this,...args);
       }
        return res[argscache]
       
    }
}
const memory = (num1,num2)=>{
    return num1*num2
}
const memoizedMemory = Memoize(memory);

console.time();
console.log(memoizedMemory(22, 33)); // First call with (22, 33)
console.timeEnd();

console.time();
console.log(memoizedMemory(22, 33)); // Second call with same arguments (should be cached)
console.timeEnd();
