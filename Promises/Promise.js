function MyPromise(execute){
     let isRejected=false;
     let isResolved = false;
     let isCalled = false;
     let value;
     let error;
     let onResolve;
     let onReject;
     function resolve(val){
        value=val;
        isResolved=true;
        if(typeof onResolve=="function"&&!isCalled){
            onResolve(value);
            isCalled=true;
        }
     }
     function reject(err){
        error = err;
        isRejected=true;
        if(typeof onReject=="function"&&!isCalled){
            onReject(error);
            isCalled=true;
        }
     }
     this.then=function(callback){
         onResolve=callback;
         if(!isCalled&&isResolved){
             callback(value)
             isResolved=true;
         }
         return true;
     }
     this.catch = function(callback){
        onReject=callback;
        if(!isCalled&&isRejected){
            callback(error);
            isRejected=true
        }
        return this;
     }
     execute(resolve,reject)
}
const Promise1 = new MyPromise((res,rej)=>{
    setTimeout(()=>{
        res("Resolved the First Promise!")
    },2000)
})
const Promise2 = new MyPromise((res,rej)=>{
    setTimeout(()=>{
        rej("Error occured!!!")
    },3000)
})
Promise1.then((x)=>console.log(x))
Promise2.catch((x)=>console.log(x))
//this is an implementation of Promise Polyfill 