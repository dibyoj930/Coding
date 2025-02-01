const Debounce = (fn,delay)=>{
    let timer=null;
    return function(...args){
        if(timer)clearTimeout(timer);
        timer = setTimeout(()=>{
            fn(...args);
        },delay)
    }
}
const Deb = Debounce(()=>{
    console.log("key has types!!!");
},2000)