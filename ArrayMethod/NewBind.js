Function.prototype.myBind=function(...args1){
    let obj = this;
    let args = args1.slice(1);
    return function(...args2){
        obj.apply(args1[0],[...args,...args2])
    }
}
const obj ={
    name :"Dibyo",
    age:24
}
function Createnew(city,pincode){
    console.log(`Hey I am ${this.name} I live in ${city}, Pin-${pincode} aged ${this.age}.`)
}
let newres = Createnew.myBind(obj,"Indiranagar","560075");
newres();
