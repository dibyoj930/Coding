//scratch ->
//deepcopy 
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
const Deepcopy=(obj)=>{
    if(typeof obj!=="object"||obj==null)return obj;
    if(Array.isArray(obj)){
        return obj.map((x)=>Deepcopy(x));
    }
    const newobj={};
    for(let key in obj){
        newobj[key]=Deepcopy(obj[key])
    }
    return newobj;
}
const res=Deepcopy(demo)
console.log(res)

//flat->
Array.prototype.Myflat = function(){
   let curr=0;
   let arr=[...this]
   while(curr<arr.length){
    let el=arr[curr];
    if(Array.isArray(el)){
        arr.splice(curr,1,...el)
    }else{
        curr++;
    }
   }
   return arr;
}
const arr=[1,2,3,[4,[5,6,7,[8,9,10]]]];
console.log(arr.Myflat())

//reverse
Array.prototype.rever = function(){
    let end=this.length;
    let mid=Math.floor(end/2);
    for(let j=0;j<mid;j++){
        let temp=arr[j];
        arr[j]=arr[end-1-j];
        arr[end-1-j]=temp
    }
    return arr;
}
const arr2=[2,5,7,8,9,9,0]
console.log(arr2.rever())
const Deepflat=(obj,newkey='')=>{
    let res={};
    for(let key in obj){
        let mkey = newkey?`${newkey}.${key}`:`${key}`;
        if(typeof obj[key]=="object"&&!Array.isArray(obj[key])&&obj[key]!==null){
            res={...res,...Deepflat(obj[key],mkey)}
        }else{
            res[mkey] = obj[key]
        }
    }
    return res;
}
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
// const res = Dee
console.log(Deepflat(input))

//memoize 
const memofun = (fn)=>{
    let rescache={};
    return function(...args){
       
       let argskey = JSON.stringify(args);
        
       if(!rescache[argskey]){
        res[argskey]=fn.call(this,...args);
       }
       return res[argskey];
    }
}
const cal=(a,b)=>{
    return a*b;
}
const memoizedcall=memofun(cal)

console.time()
console.log(memoizedcall(9990000,890009))
console.timeEnd()

console.time()
console.log(memoizedcall(9990000,890009))
console.timeEnd()


//once function
const Once = (fn)=>{
    let ran;
    return function(...args){
        if(fn){
            ran = fn.apply(this,...args);
            fn=null;
        }
        return ran;
    }
}
const changes = (num1,num2)=>{
    console.log("Called!",num1,num2)
}
const re2s = Once(changes(1,2))
re2s();
re2s()
re2s()


//assign
Object.prototype.myassign=function(target,...sources){
    if(target==null||target==undefined){
        throw new TypeError("enter object as target!");
    }
    let ob = Object(target);
    for(let i=0;i<sources.length;i++){
        let s=sources[i];
        if(s!==null&&s!=undefined){
            //edge case
        for(let key of Object.keys(s)){
            ob[key]=s[key];
        }
        //if it's an array like object
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
let s2={f:8}

console.log(Object.myassign(target,s1,s2))
// stringToObject("a.b.c", "someValue");
// output -> {a: {b: {c: "someValue"}}}
const convertObj=(str,val)=>{
    let key={};
    let string=str.split(".");
    let res=key;
    for(let i=0;i<string.length-1;i++){
        res[string[i]]={};//-> {a:{}}
        res=res[string[i]];//--> {a:{res}}
    }
    res[string[string.length-1]]=val;
    return key;
}
console.log(convertObj("a.b.c", "someValue"));
//findindex-->
Array.prototype.findIn=function(callback){
    if(!Array.isArray(this)){
        throw new TypeError("Not an array!")
    }
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            return i;
        }
    }
    return -1;
}
const arr23=[2,5,6,8,9];
console.log(arr23.findIn((x)=>x>=6))
//find last will be the same iteration will be from end
Array.prototype.finD=function(callback){
    if(!Array.isArray(this)){
        throw new TypeError("Insert array!");
    }
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            return this[i];
        }
    }
    return -1;
}
console.log(arr23.finD((x)=>x%2==0))

//unshift ->
Array.prototype.Unshift=function(...elements){
    if(!Array.isArray(this)){
        throw new TypeError("Error in the type!");
    }
    const newarr=[...elements,...this];
    this.length=0;
    this.push(...newarr);
    return this.length;
}
const test=[2,4,6,7,8];
console.log("length",test.Unshift(9,10,11));
console.log(test);

//slice
const testarr = [2,6,7,8,"test","blank","value",26,37];
Array.prototype.mySlice=function(start,end){
    if(!Array.isArray(this)){
        return new TypeError("call on an array!");
    }
    if(start<0){
        start = Math.max(this.length+start,0);
    }
    if(end<0){
        end =  Math.max(this.length+end,0);
    }
    let res=[];
    for(let i=start;i<end&&i<this.length;i++){
        res.push(this[i]);
    }
    return res;
}
console.log(testarr.mySlice(-4,-1))
console.log(testarr.slice(-4,-1));

//shift method in arr->
Array.prototype.myShift=function(){
    if(!Array.isArray(this)){
        return new TypeError("call on an array!");
    }
    if(this.length==0){
        return undefined;
    }
    let res=this[0];
    for(let i=1;i<this.length;i++){
        this[i-1]=this[i];
    }
    return res;
}
// console.log("shifted value",testarr.myShift());
// console.log(testarr);
// console.log("shifted value",testarr.myShift());
// console.log(testarr);

//splice method
Array.prototype.mySplice=function(start,deletecount,...items){
    if(!Array.isArray(this)){
        throw new TypeError("enter an array!");
    }
    if(start<0){
        start=Math.max(start+this.length,0);
    }
    deletecount = Math.min(this.length-start,deletecount);
    const removed=[];
    for(let i=0;i<deletecount;i++){
        removed.push(this[start+i])
    }
    const tail =  this.slice(start+deletecount);
    const newlen = start+tail.length+items.length;
    this.length=start;

    for(let i=0;i<items.length;i++){
        this.push(items[i])
    }
    for(let i=0;i<tail.length;i++){
        this.push(tail[i])
    }

    return removed;
}
const final = testarr.mySplice(3,3,"removed","removed","allremoved")
console.log("res",final,testarr);

Array.prototype.conCat=function(){
    let newarr=[];
    for(let i=0;i<this.length;i++){
        newarr.push(this[i]);
    }
    for(let i=0;i<arguments.length;i++){
        let val=arguments[i]
        if(Array.isArray(val)){
            for(let i=0;i<val.length;i++){
                newarr.push(val[i])
            }
        }else{
            newarr.push(arguments[i])
        }
    }
    return newarr
}
const arr556=[2,5,6,8];
console.log(arr556.conCat(1,2,[3,4,5],"string"));

//map, filter, reduce, forEach 
const commonarr = [2,5,7,8,9,10];

Array.prototype.Mymap=function(call,initial){
  let acc=initial;
  for(let i=0;i<this.length;i++){
    acc = acc?call(this[i],acc):this[i];
  }

  return acc;
}
console.log(commonarr.Mymap((init,sum)=>init+sum,0));

Array.prototype.Myfor = function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i]);
    }
}
console.log(commonarr.Myfor((x)=>x**2));

function Eventlist(event,callback,usecapture){
   if(!this._event)this._event={};
   if(!this._event[event])this._event[event]=[];
   this._event[event].push(callback);
   if(usecapture){
     this.Eventlist(event,callback,true);
   }else{
    this.attachEvent("on"+event,callback)
   }
}
function remove(event,callback,usecapture){
    if(!this._event)return;
    if(!this._event[event])return;
    let index = this._event[event].indexOf(callback);
    if(index!=-1){
        this._event[event].splice(index,1);
        if(usecapture){
            this.removeEl(event,callback,true);
        }else{
            this.detachEvent("on"+event,callback);
        }
    }
}

const DeepCompare = (obj1,obj2)=>{
   if(obj1==obj2)return true;

   if(typeof(obj1)!=="object"||typeof(obj2)!=="object"||obj1==null||obj2==null){
    return false;
   }
   let keys1 = Object.keys(obj1);
   let keys2 = Object.keys(obj2);

   if(keys1.length!==keys2.length)return false;

   for(let key of obj1){
    if(!keys2.includes(key)||!DeepCompare(obj1[key],obj2[key])){
        return false;
    }
   }
   return true;
}
//join polyfill
Array.prototype.Myjoin=function(separator){
    let str="";
    if(!Array.isArray(this)){
        throw new TypeError("not an array!");
    }
    for(let i=0;i<this.length;i++){
        if(i>0){
            str+=separator;
        }
        if(this[i]!==null&&this[i]!==undefined){
            str+=this[i];
        }
    }
    return str;
}
console.log(commonarr.Myjoin("-"));
//shallow copy 
const Shallow=(obj)=>{
    if(Array.isArray(obj)){
        return [...obj];
        //if array copy spread
    }
    else if(obj&&typeof obj=="object"){
        return {...obj};
        //if nested just spread object
    }else{
        return obj;
        //primitive value just return value
    }
}
const originalObj = { a: 1, b: { c: 2 } };
  const copyObj = Shallow(originalObj);
  
  copyObj.a = 100;
  copyObj.b.c = 999;
  
  console.log(originalObj); 
  console.log(copyObj);  
//custom lodash 
const data={a:{b:{c:{d:{e:"my hidden value"}}}}}
const Lodashed = (obj,path,defaultval)=>{
    return path.split(".").reduce((acc,key)=>acc[key],obj)||defaultval;
}
console.log(Lodashed(data,"a.b.c.d.e","value"))
//reverse key value, rename property , html tag check
//rename
const nestedObjects = {
    user: {
      firstName: "John",
      lastName: "Doe",
      details: {
        firstName: "Johnny",
      },
    },
  };
const renamepro=(obj,old,newp)=>{
    if(obj.hasOwnProperty(old)){
        obj[newp]=obj[old];
        delete obj[old];
    }
    Object.keys(obj).forEach((x)=>{
        if(typeof obj[x]=="object"&&obj[x]!==null){
            renamepro(obj[x],old,newp)
        }
    })
    return obj;
}
  const updatedPerson = renamepro(nestedObjects, "firstName", "AOldFirstName");
  console.log(updatedPerson)
//reverse key value
const myobj={
    name:"Dibyo",
    age:"26",
    address:{
        line:{
            newline:"2no. murari mohan sen road"}
    }
 }

 const reversekeyval=(obj)=>{
    if(typeof obj!=="object"||obj==null)return obj;

    return Object.fromEntries(Object.entries(obj).map(([key,val])=>{
        if(typeof val=="object"&&val!==null){
            return [key,reversekeyval(val)];
        }
        return [val,key]
    })
  )
 }
 console.log(reversekeyval(myobj))


 //html 
 const checkHtml=(str)=>{
    let i=0;
    let n=str.length;
    let stack=[];
    while(i<n){
      //track starting tag
      if(str[i]=="<"&&str[i+1]!="/"){
        let tagstart = i+1;
        let tagendindex = str.indexOf(">",tagstart);
        if(tagendindex==-1)return false;
        
        let tag =  str.slice(tagstart, tagendindex).trim();
        if (tag.endsWith("/")) { //for self closing tags
            i = tagendindex + 1;
            continue;
        }

        const tagName = tag.split(" ")[0];
        stack.push(tagName);
        i=tagendindex+1;
      }
       //track ending tag
     else if(str[i]=="<"&&str[i+1]=="/"){
        let tagstart=i+2; //ignore </
        let tagend = str.indexOf(">",tagstart);
        if(tagend==-1)return false;
        let tag =  str.slice(tagstart, tagend).trim();
        

         //check with stack 
         if(stack.length==0||tag!==stack.pop()){
            return false;
         }
         i=tagend+1;

      }
      else{
        i++;
      }
    }

    return stack.length===0;
}
const html1 = "<div><span></span></div>";
const html2 = "<div><span></div></span>";
const html3 = "<div><img src='img.jpg' /></div>";

console.log(checkHtml(html1));  // true
console.log(checkHtml(html2));  // false
console.log(checkHtml(html3));  // true
 
//event emitter

class EventEmitter{
    constructor(){
        this.event={}
    }
    on(event,listener){
        if(!this.event[event])this.event[event]=[];
        this.event[event].push(listener);
    }
    emit(event,...args){
        this.event[event].forEach((listener)=>listener(...args));
    }
    off(event,listener){
        if(!this.event[event])return;
        this.event[event]=this.event[event].filter((l)=>l!==listener)
    }
}
const emit =  new EventEmitter();
function Greet(str){
  console.log( `Hi ${str}`)
}
function Test(str){
    console.log(`Roll No.- ${str}`)
}
emit.on("SayHi",Greet);
emit.on("Test",Test);
emit.off("SayHi",Greet)
emit.emit("Test","21")
emit.emit("SayHi","Dibyo!");

//Groupby with a specific property
const Grouparr=[{ id: 1, name: "Shubham", departmentId: 101 }, { id: 2, name: "Krutika", departmentId: 101 }, { id: 3, name: "Sakshi", departmentId: 102 }];

const GroupIt=(arr,property)=>{
    return arr.reduce((acc,obj)=>{
        let groupKey = obj[property];
        if(!acc[groupKey]){
            acc[groupKey]=[];
        }
         acc[groupKey].push(obj);
         return acc;
    },{})
}
console.log(GroupIt(Grouparr,"departmentId"))


//classname
const classNames=(...args)=>{
    const className=[];
    args.forEach((arg)=>{
        if(!arg){
            return;
        }
        if(Array.isArray(arg)){
            className.push(classNames(...arg));
            return;
        }
        let argtype = typeof arg;
        if(argtype=="number"||argtype=="string"){
            className.push(arg);
            return;
        }
        if(argtype=="object"){
            for(let key in arg){
                if(Object.hasOwn(arg,key)&&arg[key]){
                    className.push(key)
                }
            }
            return;
        }
    })
    return className.join(" ");
}


console.log(classNames('foo', 'bar')); // 'foo bar'
console.log(classNames('foo', { bar: true })); // 'foo bar'
console.log(classNames({ 'foo-bar': true })); // 'foo-bar'
console.log(classNames({ 'foo-bar': false })); // ''
console.log(classNames({ foo: true }, { bar: true })); // 'foo bar'
console.log(classNames({ foo: true, bar: false, qux: true })); // 'foo qux'
console.log(classNames('a', ['b', { c: true, d: false }])); // 'a b c'
console.log(classNames(
  'foo',
  { bar: true, duck: false },
  'baz',
  { quux: true }
)); // 'foo bar baz quux'
//valueof-->


