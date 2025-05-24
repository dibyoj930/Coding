Function.prototype.myCall=function(obj,...args){
    if(typeof this !=="function"){
        throw new Error("error happend!")
    }
    console.log(obj,this)
    obj.fn = this;
    console.log(obj,obj.fn)
    return obj.fn(...args)
}
const newobj={
    name:"Test",
    roll:20
}
const newobj2={
    name:"Test2",
    roll:22
}
function Callobj(state,city){
   return `Hey I am ${this.name}, My roll is ${this.roll}. I live in ${state}, City ${city}`
}
let ans =Callobj.myCall(newobj,"West Bengal","Siliguri")
console.log("res-->",ans)