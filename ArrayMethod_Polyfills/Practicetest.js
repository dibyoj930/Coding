//prototypes
//call
const objecttest={
    name:"Dibyo",
    place:"Berhampore"
}
const objecttest2={
    name:"Deb",
    place:"Kolkata"
}
function getData(city,pin){
    return `Hi I am ${this.name}, live in ${this.place}, from ${city}, pin-${pin}`
}
Function.prototype.myCall = function(obj,...args){
     if(typeof this!=="function"){
        throw new TypeError("not a function!");
     }
     obj.fn = this;
    return obj.fn(...args);
}

const res = getData.myCall(objecttest2,"Birati","700013");
console.log(res);
//apply
Function.prototype.myApply = function(obj,args){
    if(typeof this!=="function"){
        throw new TypeError("not a function!");
    }
    if(!Array.isArray(args)){
        throw new TypeError("not an array of args!")
    }
    obj.fn=this;
    return obj.fn(...args)
}
const result = getData.myApply(objecttest,["Delhi","5600102"]);
console.log(result);
//bind
Function.prototype.myBind = function(...args){
    let obj = this;
    let args1 = args.slice(1,);
    return function(...args2){
        return obj.apply(args[0],[...args1,...args2])
    }
}
const bindresult = getData.myBind(objecttest,"Bangalore","560075");
console.log(bindresult());

//map
Array.prototype.myMap = function(cb){
    let newarr=[];
    for(let i=0;i<this.length;i++){
        newarr.push(cb(this[i]));
    }
    return newarr;
}
const testarr=[5,6,7,8,10];
const testres = testarr.myMap((x)=>x**2);
console.log(testres);

//filter
Array.prototype.myFilter = function(cb){
    let newarr=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            newarr.push(this[i]);
        }
    }
    return newarr;
}
const testfilter = testres.myFilter((x)=>x%2===1);
console.log(testfilter);

//reduce
Array.prototype.myReduce = function(cb,initial){
   let acc=initial;
   for(let i=0;i<this.length;i++){
    acc=acc?cb(this[i],acc):this[i];
   }
   return acc;
}
const myres = testfilter.myReduce((curr,sum)=>curr+sum,0);
console.log(myres)

//flattennested
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

const flatted = (obj,newkey)=>{
    let res={};
    for(let key in obj){
        let mykey = newkey?`${newkey}.${key}`:`${key}`;
        if(typeof obj[key]=="object"&&obj[key]!==null&&!Array.isArray(obj[key])){
            res={...res,...flatted(obj[key],mykey)}
        }else{
            res[mykey]=obj[key]
        }
    }
    return res;
}
const testresultobj = flatted(input);
console.log(testresultobj);

//find
Array.prototype.myFind = function(cb){
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            // return this[i];
            return i;
        }
    }
    return -1;
}
const resfind = testarr.myFind((x)=>x%2==0);
console.log(resfind);

//array flat recusrsive
Array.prototype.myFlat = function(){
    let newarr=[];
    for(let i of this){
        if(Array.isArray(i)){
            newarr.push(...i.myFlat());
        }else{
            newarr.push(i);
        }
    }
    return newarr;
}
console.log([1,2,[3,4,[5,6,[7,8,[9,10]]]]].myFlat());

//array flat iterative
Array.prototype.myFlatIterative = function(){
    let res=[...this];
    let curr=0;
    while(curr<res.length){
        let val = res[curr];
        if(Array.isArray(val)){
            res.splice(curr,1,...val);
        }else{
            curr++;
        }
    }
    return res;
}
console.log([1,2,[3,4,[5,6,[7,8,[9,10,[11,12]]]]]].myFlatIterative());

const data = { a: { b: { c: 42 } } };
//custom lodash 
const fun = (obj,path,defaultval)=>{
   return path.split(".").reduce((acc,key)=>acc?.[key],obj)||defaultval;
}
const lodashres = fun(data,"a.b.c","default");
console.log(lodashres);
//debounce

//thottle
//reverse 
Array.prototype.myreverse=function(){
    let len=this.length;
    let mid = Math.floor(len/2);
    for(let i=0;i<mid;i++){
        let temp=this[i];
        this[i]=this[len-i-1];
        this[len-i-1]=temp;
    }
    return this;
}
console.log([1,2,3,4,5].myreverse())
//strtonestedarr
function stringToObject(path,value){
   let obj={};
   let res=obj;
   let data=path.split(".");
   for(let i=0;i<data.length-1;i++){
    res[data[i]]={};
    res = res[data[i]];
   }
   res[data[data.length-1]]=value;
   return obj;
}
console.log(stringToObject("a.b.c", "someValue"));
//memoize
const memoi = (fn)=>{
   
        const argscache = {};
        return function(...args) {
            let argss = JSON.stringify(args); // ✅ FIXED
            if (!argscache[argss]) {
                argscache[argss] = fn.call(this, ...args);
            }
            return argscache[argss];
        }

    
}
const multiply = (a,b)=>{return a*b};
const resmemo = memoi(multiply);
console.time();
console.log(resmemo(999,888))
console.timeEnd();
console.time();
console.log(resmemo(999,888))
console.timeEnd();
//once
const Once=(fn)=>{
    let ran;
    let called = false;
    return function(...args){
        if(!called){
            ran = fn.apply(this,...args);
            called=true;
        }
        return ran;
    }
}
const changes = (num1,num2)=>{
    console.log("Called!",num1,num2)
}
// const resss = Once(changes(1,2))
// resss();
// resss();
// resss();
//deepcopy
const customdeepcopy = (obj)=>{
    if(obj==null||typeof obj!=="object")return obj;
    if(Array.isArray(obj)){
        obj = obj.map((x)=>customdeepcopy(x));
        return obj;
    }
    let newobj={};
    for(let key in obj){
        newobj[key]=customdeepcopy(obj[key]);
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
const democopy = customdeepcopy(demo);
console.log(democopy);
// democopy.address.line1="test gtah"
console.log(democopy);
console.log(demo);
//comparedeeplynested
const comparedeeplynested = (obj1,obj2) => {
   if(obj1===obj2)return true;
   if(obj1==null||obj2==null||typeof obj1!=="object"||typeof obj2!=="object")return false;
   let keys1 = Object.keys(obj1);
   let keys2  = Object.keys(obj2);
   if(keys1.length!==keys2.length)return false;
   for(let k of keys1){
    if(!keys2.includes(k)||!comparedeeplynested(obj1[k],obj2[k])){
        return false;
    }
   }
   return true;
}
console.log(comparedeeplynested(demo,demo))
//emitter
//evenlistener
//jsonparse
var jsonString = '{"name":"Alice","age":30,"isStudent":false}';
function Parse(str){
    if(typeof str!=="string"){
        throw new Error("string type is required!");
    }
    try{
        let result = eval('('+str+')');
        return result;
    }catch(e){
        throw new SyntaxError("string cannot be parsed to json");
    }
}
try{
    const parsed = Parse(jsonString);
    console.log(parsed);
}catch(e){
    console.error(e);
}
//jsonstringify
var myObject = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "gaming", "hiking"],
    details: {
        hair: "brown",
        height: 165
    },
    // Non-serializable properties (functions) will be ignored in the output
    greet: function() { return `Hello, my name is ${this.name}`; }
};
function Stringify(obj){
    if(obj==null)return null;
    if(typeof obj==="string"){
        return `"${obj}"`
    }
    if(typeof obj=="number"||typeof obj=="boolean"){
        return obj.toString();
    }
    if(Array.isArray(obj)){
        let arrobj = obj.map((x)=>Stringify(x));
        return `[${arrobj}]`
    }
    if(typeof obj=="object"){
        let key =  Object.keys(obj);
        const valuesOfKey = key.map((k)=>{
            let value  = Stringify(obj[k]);
            if(value==undefined||value=="function"){
                return "";
            }
            return `"${k}":"${value}"`
        }).filter(Boolean);
        return `{${valuesOfKey.join(',')}}`
    }
    return undefined;
}
console.log(Stringify(myObject));
//assign
Object.prototype.myAssign = function(target,...source){
    if(target===null||target==undefined){
        throw new TypeError("Not Possible!!!");
    }
    let ob = Object(target);
    for(let i=0;i<source.length;i++){
        let s=source[i];
        if(s!==undefined&&s!==null){
            for(let key of Object.keys(s)){
                ob[key]=s[key];
            }
            if(typeof s=="object"){
                for(let key in s){
                    if(Object.prototype.hasOwnProperty.call(s,key)){
                        ob[key]=s[key]
                    }
                }
            }
        }
    }
    return ob;
}
let target={a:1,f:6};
let s1={a:2,b:3,c:{d:"5"}}
let s2={f:8,g:[1,2,3,4]}
Object.myAssign(target,s1,s2)
console.log(target);
//eventlistener
//addeventlistener
function addEventListener(eventname,callback,useCapture){
   if(!this._events)this._events={};
   if(!this._events[eventname])this._events[eventname]=[];
   this._events[eventname].push(callback);
   if(useCapture){
    this.addEventListener(eventname,callback,true);
   }else{
    this.attachEvent("on"+eventname,callback)
   }
}
function removeEventListener(eventname,callback,useCapture){
    if(!this._events)return;
    if(!this._events[eventname])return;
    let index = this._events[eventname].indexOf(callback);
    if(index!==-1){
        this._events[eventname].splice(index,1);
        if(useCapture){
            this.removeEventListener(eventname,callback,true);
        }else{
            this.detachEvent("on"+eventname,callback);
        }
    }
}
//slice
Array.prototype.mySlice=function(start,end){
    if(!Array.isArray(this)){
        throw new TypeError("It's not an array!");
    }
    const length = this.length;
    let startIndex = start||0;
    let endIndex = end||length;
    if(startIndex<0){
        startIndex=Math.max(startIndex,length+startIndex);
    }
    if(endIndex<0){
        endIndex=Math.max(endIndex,length+endIndex);
    }
    const result=[];
    for(let i=startIndex;i<endIndex&&i<length;i++){
        result.push(this[i]);
    }
    return result;
}
console.log([2,3,4,5,6,1,23,43,233,2332].mySlice(2,5));
//emitter
class EventEmitter{
    constructor(){
        this.events={};
    }
    on(event,listener){
       if(!this.events[event])this.events[event]=[];
       this.events[event].push(listener);
    }
    emit(event,...args){
      if(this.events[event]){
        this.events[event].forEach((x)=>x(...args));
      } 
    }
    off(event,listener){
      if(!this.events[event])return;
      this.events[event]=this.events[event].filter((x)=>x!==listener);
    }

}
//splice

//concatenate
Array.prototype.myConCat = function(){
    if(!Array.isArray(this)){
        throw new TypeError("Not an array!");
    }
    let newarr=[];
    for(let i=0;i<this.length;i++){
        newarr.push(this[i]);
    }
    for(let i=0;i<arguments.length;i++){
        let args = arguments[i];
        if(Array.isArray(args)){
            for(let j=0;j<args.length;j++){
                newarr.push(args[j])
            }
        }else{
            newarr.push(args)
        }
    }
    return newarr;
}
console.log([1,2,3,4,5].myConCat([1,2,3],9,8))
//foreach
Array.prototype.myForEach=function(cb){
    if(!Array.isArray(this)){
        throw new TypeError("Not an array!");
    }
    for(let i=0;i<this.length;i++){
       cb(this[i]);
    }
}
const testss=[44,55,66];
const newresult=testss.myForEach((x)=>x*2);
console.log(newresult)
//join 
function Join(arr,sep){
    let resString='';
    for(let i=0;i<arr.length;i++){
        if(i>0){
            resString+=sep;
        }
        if(arr[i]!==undefined&&arr[i]!==null){
            resString+=arr[i]
        }
        
    }
    return resString;
}
console.log(Join(testarr,"-"))
//debounce
const test = (fn,delay)=>{
    let timer;
    return function(...args){
       if(timer)clearTimeout(timer);
       timer = setTimeout(()=>{
        fn(...args);
       },delay)
    }
}
const mydev=test(()=>{
    console.log("user has typed something!!!")
},2000)
//throttle done -> index.html

