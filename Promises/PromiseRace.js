// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
// This returned promise settles with the eventual state of the first promise that settles.
Promise.MyRace = function(promises){
    return new Promise((res,rej)=>{
        promises.forEach((x)=>{
            x.then(res).catch(rej)
        })
    })
}
const p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej('rejected first!')
    },1000)
})

const p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej('rejected second!')
    },2000)
})

const p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('resolved later!')
    },500)
})
Promise.MyRace([p1,p2,p3]).then((x=>console.log(x))).catch((e)=>console.log(e))
