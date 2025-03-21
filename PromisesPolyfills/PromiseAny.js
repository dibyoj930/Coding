// The Promise.any() static method takes an iterable of promises as input and returns a 
// single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.
Promise.Myany = function(promises){
    let errorarr = new Array(promises.length);
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      let promise = promises[i];
      promise.then(resolve).catch((error) => {
        count++;
        errorarr[i] = error;
        if (count === promises.length) {
          reject(new AggregateError(errorarr, "All promises rejected1"));
        }
      });
    }
  });
}
const p32 = new Promise((res,rej)=>{
//    setTimeout(rej,1000,"value1reject")
setTimeout(()=>{
    rej('rejected this one')
},2000)
})
const p2 = new Promise((res,rej)=>{
   setTimeout(()=>{
    rej('resolved this one later!')
   },3000)
})
// const p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res(console.log("resolved one!"))
//     },3000)
// })
Promise.Myany([p32,p2]).then((x)=>console.log(x)).catch((e)=>console.log(e))