Function.prototype.myApply = function(obj,args){
    if(typeof this !=="function"){
        throw new Error("error occured!")
    }
    if(!Array.isArray(args)){
        throw new Error("error occured!")
    }
    obj.fn = this;
    return obj.fn(...args)
}
const obj ={
    name :"Dibyo",
    age:24
}
function Createnew(city,pincode){
    return `Hey I am ${this.name} I live in ${city}, Pin-${pincode} aged ${this.age}.`
}

const res =  Createnew.myApply(obj,["Berhampore","742103"])
console.log(res)