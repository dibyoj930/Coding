// The Promise.all() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. 
// It rejects when any of the input's promises rejects, with this first rejection reason.
Promise.Myall = function(promises){
    let res=[];
    let count=0;
    return new Promise((resolve,rej)=>{
        for(let i =0;i<promises.length;i++){
            let p1 = promises[i];
            p1.then((value)=>{
                res[i]=value;
                count++;
                if(count==promises.length){
                    resolve(res);
                }
            }).catch(rej)
        }
        return res;
    })
}
const p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Resolved 1st!")
    },1000)
})
const p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Resolved 2nd!")
    },2000)
})
const p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Resolved 3rd!")
    },3000)
})
Promise.Myall([p1,p2,p3]).then((x)=>console.log(x)).catch((e)=>console.log(e))