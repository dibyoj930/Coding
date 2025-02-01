//throttle will take a function along with timer,
// it will reexecute the function after some time delay.
const throttle = function(fn,delay){
    
    return function(...args){
        console.log(document.getElementById('btn'))
        document.getElementById('btn').disabled=true;
        setTimeout(()=>{
            fn(...args);
        },delay)
    }
}
const mythrottle = throttle(()=>{
    console.log("button got clicked!");
    document.getElementById('btn').disabled=false;
},2000)

// window.mythrottle=mythrottle