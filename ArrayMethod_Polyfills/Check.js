//testing all knowledge
//call apply bind
const obj={
    name:"Dev",
    age:29
}
const obj2={
    name:"Debaditya",
    age:25
}
function getdetails(x,y){
    return `Hi I am ${this.name}, I am ${this.age} years old live in ${x}, State ${y}`
}
Function.prototype.myCall=function(obj,...args){
    if(typeof this!=="function"){
        throw new TypeError("error!")
    }
    obj.fn=this;
    return obj.fn(...args);
}
// console.log(getdetails.myCall(obj2,"Berhampore","WB"));

//apply
Function.prototype.myApply=function(obj,arg){
    if(typeof this!=="function"){
        throw new TypeError("error!")
    }
    if(!Array.isArray(arg)){
        throw new TypeError("error!")
    }
    obj.fn=this;
    return obj.fn(...arg)
}
// console.log(getdetails.myApply(obj,["Bangalore","Karnataka"]));
//Bind
Function.prototype.myBind=function(...args){
    let args1=args.slice(1,);
    let obj=this;
    return function(...args2){
        return obj.apply(args[0],[...args1,...args2])
    }
}
const res=getdetails.myBind(obj,"ludhiana","punjab");
console.log(res());
//map filter reduce foreach
Array.prototype.mymap=function(cb){
    if(!Array.isArray(this)){
        throw new TypeError("error!");
    }
    let res=[];
    for(let i=0;i<this.length;i++){
        res.push(cb(this[i]))
    }
    return res;
}
const test=[2,4,5,7,8];
Array.prototype.myfilter=function(cb){
    if(!Array.isArray(this)){
        throw new TypeError("error!");
    }
    let res=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            res.push(this[i])
        }
    }
    return res;
}
//reduce  
Array.prototype.myReduce=function(acc,init){
   let initial=acc;
   for(let i=0;i<this.length;i++){
      
   }
}
console.log(test.mymap((x)=>x**3))
console.log(test.myfilter((x)=>x%2==0))
//reverse
Array.prototype.myReverse=function(){
    let len=this.length;
    let mid=Math.floor(len/2);
    for(let i=0;i<mid;i++){
        let temp=this[i];
        this[i]=this[len-i-1];
        this[len-i-1]=temp;
    }
    return this;
}
console.log([3,5,6,7,8].myReverse())
//debounce
const debounce=(fn,delay)=>{
    let timer;
    return function(...args){
        if(timer)clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(...args);
        },delay)
    }
}
//findindex
Array.prototype.MyFindIndex=function(cb){
    if(!Array.isArray(this)){
        throw new TypeError("Error!");
    }
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            return this[i];
        }
    }
    return -1;
}
const testw=[2,5,6,7,8]
console.log(testw.MyFindIndex((x)=>x%2==1))

//flat
//Recursive
Array.prototype.MyFlat=function(){
    let res=[];
    for(let k of this){
        if(Array.isArray(k)){
           res.push(...k.MyFlat())
        }else{
            res.push(k);
        }
    }
    return res;
}
console.log([1,2,[3,4,[5,6,[7,8,[9,10]]]]].MyFlat())
//Iterative
Array.prototype.thisFlat=function(){
    let res=[...this];
    let curr=0;
    while(curr<res.length){
        let val=res[curr];
        if(Array.isArray(val)){
            res.splice(curr,1,...val)
        }else{
            curr++;
        }
    }
    return res;
}
console.log([1,2,[3,4,[5,6,[7,8,[9,10]]]]].thisFlat())

//deepcopy
const deepcopy=(obj)=>{
    if(typeof obj!=="object"||obj==null)return obj;

    if(Array.isArray(obj)){
        return obj.map((x)=>deepcopy(x));
    }

    let newobj={}
    for(let key in obj){
        newobj[key]=deepcopy(obj[key]);
    }
    return newobj;
}
const demo={
    name:"Dibyo",
    address:{
        line1:'2no murari mohan sen road',
        line2:'Berhampore',
        res:[1,2,3,4],
        Pincode:{
            first:"742",
            second:"103"
        }
    }
}
let ans=deepcopy(demo)
console.log(ans)
//concate
Array.prototype.myConCat=function(){
    let res=[];
    for(let i=0;i<this.length;i++){
        res.push(this[i]);
    }
    for(let i=0;i<arguments.length;i++){
        let val=arguments[i];
        if(Array.isArray(val)){
          
            for(let j=0;j<val.length;j++){
                res.push(val[j]);
            }
        }else{
            res.push(val);
        }
    }
    return res
}
console.log([2,4,5,6,67].myConCat(1,2,[2,4,5],["test"]))
//splice
//emitter

//listener

//flatten
const input = {
    name: 'Mansi',
    age: 25,
    department: {
      name: 'Customer Experience',
      section: 'Technical',
      branch: {
         name: 'Bangalore',
         timezone: 'IST'
      }
    },
    company: {
     name: 'SAP',
     customers: ['Ford', 'Nestle']
    },
    skills: ['javascript', 'node.js', 'html']
  }

const FlattenNested=(obj,prevkey='')=>{
   let res={};
   for(let key in obj){
      let newkey = prevkey?`${prevkey}.${key}`:`${key}`;
      if(typeof obj[key]==="object"&&!Array.isArray(obj[key])&&obj[key]!==null){
        res={...res,...FlattenNested(obj[key],newkey)}
      }else{
        res[newkey]=obj[key];
      }
   }
   return res
}
const myres = FlattenNested(input);
console.log(myres)
//join
Array.prototype.myJoin=function(val){
    if(!Array.isArray(this)){
        throw new TypeError("error!")
    }
   let str='';
   for(let i=0;i<this.length;i++){
     if(i>0){
        str+=val;
     }
     if(this[i]!==null&&this[i]!==undefined){
        str+=this[i];
     }
   }
   return str;

}
console.log([1,2,3,4,5].myJoin("-"))
//memoize 
const fun=(a,b)=>{
    return a*b;
}
const memoize=(fn)=>{
    let res={}
    return function(...args){
       let argument=JSON.stringify(args);
       if(!res[argument]){
          res[argument]=fn.call(this,...args);
       }else{
        return res[argument];
       }
    }
}
const testfun=memoize(fun);
console.time();
console.log(testfun(300,5600));
console.timeEnd();
console.time();
console.log(testfun(300,5600));
console.timeEnd();


// once
const Once=(fn)=>{
    let iscalled=false;
    let ran;
    return function(...args){
        if(!iscalled){
           ran= fn.call(this,...args);
           iscalled=true;
        }
        return ran;
    }
}
//assign
//object assign


//slice

//object
// Write a function which converts string input into an object
// stringToObject("a.b.c", "someValue");
// output -> {a: {b: {c: "someValue"}}}
const change=(str,value)=>{
    const res={};
    let curr=res;
    const arr=str.split(".");//[a,b,c];
    for(let i=0;i<arr.length-1;i++){
        curr[arr[i]]={};
        curr=curr[arr[i]];
    }
    curr[arr[arr.length-1]]=value;
    return res;
}
console.log(change("a.b.c", "someValue"))
//throttle
const throttle=(fn,delay)=>{
    return function(...args){
        setTimeout(()=>{
            fn(...args);
        },delay)
    }
}
//unshift
Array.prototype.myUnShift=function(...args){
   let newarr=[...args,...this];
   this.length=0;
   this.push(...newarr)
   return this;
}
const newet = [2,3,4,5].myUnShift(1,2)
console.log(newet)


//promise
