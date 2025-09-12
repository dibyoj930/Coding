// //scratch ->
// //deepcopy 
// const demo={
//     name:"Dibyo",
//     address:{
//         line1:'2no murari mohan sen road',
//         line2:'Berhampore',
//         res:[1,2,3,4],
//         Pincode:{
//             first:"742",
//             second:"103"
//         }
//     }
// }
// const Deepcopy=(obj)=>{
//     if(typeof obj!=="object"||obj==null)return obj;
//     if(Array.isArray(obj)){
//         return obj.map((x)=>Deepcopy(x));
//     }
//     const newobj={};
//     for(let key in obj){
//         newobj[key]=Deepcopy(obj[key])
//     }
//     return newobj;
// }
// const res=Deepcopy(demo)
// console.log(res)

// //flat->
// Array.prototype.Myflat = function(){
//    let curr=0;
//    let arr=[...this]
//    while(curr<arr.length){
//     let el=arr[curr];
//     if(Array.isArray(el)){
//         arr.splice(curr,1,...el)
//     }else{
//         curr++;
//     }
//    }
//    return arr;
// }
// const arr=[1,2,3,[4,[5,6,7,[8,9,10]]]];
// console.log(arr.Myflat())

// //reverse
// Array.prototype.rever = function(){
//     let end=this.length;
//     let mid=Math.floor(end/2);
//     for(let j=0;j<mid;j++){
//         let temp=arr[j];
//         arr[j]=arr[end-1-j];
//         arr[end-1-j]=temp
//     }
//     return arr;
// }
// const arr2=[2,5,7,8,9,9,0]
// console.log(arr2.rever())
// // const Deepflat=(obj,newkey='')=>{
// //     let res={};
// //     for(let key in obj){
// //         let mkey = newkey?`${newkey}.${key}`:`${key}`;
// //         if(typeof obj[key]=="object"&&!Array.isArray(obj[key])&&obj[key]!==null){
// //             res={...res,...Deepflat(obj[key],mkey)}
// //         }else{
// //             res[mkey] = obj[key]
// //         }
// //     }
// //     return res;
// // }
// const input = {
//     name: 'Mansi',
//     age: 25,
//     department: {
//       name: 'Customer Experience',
//       section: 'Technical',
//       branch: {
//          name: 'Bangalore',
//          timezone: 'IST'
//       }
//     },
//     company: {
//      name: 'SAP',
//      customers: ['Ford', 'Nestle']
//     },
//     skills: ['javascript', 'node.js', 'html']
//   }
// // const res = Dee
// // console.log(Deepflat(input))

// //memoize 
// const memofun = (fn)=>{
//     let rescache={};
//     return function(...args){
       
//        let argskey = JSON.stringify(args);
        
//        if(!rescache[argskey]){
//         res[argskey]=fn.call(this,...args);
//        }
//        return res[argskey];
//     }
// }
// const cal=(a,b)=>{
//     return a*b;
// }
// const memoizedcall=memofun(cal)

// console.time()
// console.log(memoizedcall(9990000,890009))
// console.timeEnd()

// console.time()
// console.log(memoizedcall(9990000,890009))
// console.timeEnd()


// //once function
// const Once = (fn)=>{
//     let ran;
//     return function(...args){
//         if(fn){
//             ran = fn.apply(this,...args);
//             fn=null;
//         }
//         return ran;
//     }
// }
// const changes = (num1,num2)=>{
//     console.log("Called!",num1,num2)
// }
// const re2s = Once(changes(1,2))
// re2s();
// re2s()
// re2s()


// //assign
// Object.prototype.myassign=function(target,...sources){
//     if(target==null||target==undefined){
//         throw new TypeError("enter object as target!");
//     }
//     let ob = Object(target);
//     for(let i=0;i<sources.length;i++){
//         let s=sources[i];
//         if(s!==null&&s!=undefined){
//             //edge case
//         for(let key of Object.keys(s)){
//             ob[key]=s[key];
//         }
//         //if it's an array like object
//        if(typeof s=="object"){
//         for(let key in s){
//             if(Object.prototype.hasOwnProperty.call(s,key)){
//                 ob[key]=s[key]
//             }
//         }
//        }
//     }
//     }
//     return ob;
// }
// let target={a:1,f:6};
// let s1={a:2,b:3,c:{d:"5"}}
// let s2={f:8}

// console.log(Object.myassign(target,s1,s2))
// // stringToObject("a.b.c", "someValue");
// // output -> {a: {b: {c: "someValue"}}}
// const convertObj=(str,val)=>{
//     let key={};
//     let string=str.split(".");
//     let res=key;
//     for(let i=0;i<string.length-1;i++){
//         res[string[i]]={};//-> {a:{}}
//         res=res[string[i]];//--> {a:{res}}
//     }
//     res[string[string.length-1]]=val;
//     return key;
// }
// console.log(convertObj("a.b.c", "someValue"));
// //findindex-->
// Array.prototype.findIn=function(callback){
//     if(!Array.isArray(this)){
//         throw new TypeError("Not an array!")
//     }
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i],i,this)){
//             return i;
//         }
//     }
//     return -1;
// }
// const arr23=[2,5,6,8,9];
// console.log(arr23.findIn((x)=>x>=6))
// //find last will be the same iteration will be from end
// Array.prototype.finD=function(callback){
//     if(!Array.isArray(this)){
//         throw new TypeError("Insert array!");
//     }
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i],i,this)){
//             return this[i];
//         }
//     }
//     return -1;
// }
// console.log(arr23.finD((x)=>x%2==0))

// //unshift ->
// Array.prototype.Unshift=function(...elements){
//     if(!Array.isArray(this)){
//         throw new TypeError("Error in the type!");
//     }
//     const newarr=[...elements,...this];
//     this.length=0;
//     this.push(...newarr);
//     return this.length;
// }
// const test=[2,4,6,7,8];
// console.log("length",test.Unshift(9,10,11));
// console.log(test);

// //slice
// const testarr = [2,6,7,8,"test","blank","value",26,37];
// Array.prototype.mySlice=function(start,end){
//     if(!Array.isArray(this)){
//         return new TypeError("call on an array!");
//     }
//     if(start<0){
//         start = Math.max(this.length+start,0);
//     }
//     if(end<0){
//         end =  Math.max(this.length+end,0);
//     }
//     let res=[];
//     for(let i=start;i<end&&i<this.length;i++){
//         res.push(this[i]);
//     }
//     return res;
// }
// console.log(testarr.mySlice(-4,-1))
// console.log(testarr.slice(-4,-1));

// //shift method in arr->
// Array.prototype.myShift=function(){
//     if(!Array.isArray(this)){
//         return new TypeError("call on an array!");
//     }
//     if(this.length==0){
//         return undefined;
//     }
//     let res=this[0];
//     for(let i=1;i<this.length;i++){
//         this[i-1]=this[i];
//     }
//     return res;
// }
// // console.log("shifted value",testarr.myShift());
// // console.log(testarr);
// // console.log("shifted value",testarr.myShift());
// // console.log(testarr);

// //splice method
// Array.prototype.mySplice=function(start,deletecount,...items){
//     if(!Array.isArray(this)){
//         throw new TypeError("enter an array!");
//     }
//     if(start<0){
//         start=Math.max(start+this.length,0);
//     }
//     deletecount = Math.min(this.length-start,deletecount);
//     const removed=[];
//     for(let i=0;i<deletecount;i++){
//         removed.push(this[start+i])
//     }
//     const tail =  this.slice(start+deletecount);
//     const newlen = start+tail.length+items.length;
//     this.length=start;

//     for(let i=0;i<items.length;i++){
//         this.push(items[i])
//     }
//     for(let i=0;i<tail.length;i++){
//         this.push(tail[i])
//     }

//     return removed;
// }
// const final = testarr.mySplice(3,3,"removed","removed","allremoved")
// console.log("res",final,testarr);

// Array.prototype.conCat=function(){
//     let newarr=[];
//     for(let i=0;i<this.length;i++){
//         newarr.push(this[i]);
//     }
//     for(let i=0;i<arguments.length;i++){
//         let val=arguments[i]
//         if(Array.isArray(val)){
//             for(let i=0;i<val.length;i++){
//                 newarr.push(val[i])
//             }
//         }else{
//             newarr.push(arguments[i])
//         }
//     }
//     return newarr
// }
// const arr556=[2,5,6,8];
// console.log(arr556.conCat(1,2,[3,4,5],"string"));

// //map, filter, reduce, forEach 
// const commonarr = [2,5,7,8,9,10];

// Array.prototype.Mymap=function(call,initial){
//   let acc=initial;
//   for(let i=0;i<this.length;i++){
//     acc = acc?call(this[i],acc):this[i];
//   }

//   return acc;
// }
// console.log(commonarr.Mymap((init,sum)=>init+sum,0));

// Array.prototype.Myfor = function(callback){
//     for(let i=0;i<this.length;i++){
//         callback(this[i]);
//     }
// }
// console.log(commonarr.Myfor((x)=>x**2));

// function Eventlist(event,callback,usecapture){
//    if(!this._event)this._event={};
//    if(!this._event[event])this._event[event]=[];
//    this._event[event].push(callback);
//    if(usecapture){
//      this.Eventlist(event,callback,true);
//    }else{
//     this.attachEvent("on"+event,callback)
//    }
// }
// function remove(event,callback,usecapture){
//     if(!this._event)return;
//     if(!this._event[event])return;
//     let index = this._event[event].indexOf(callback);
//     if(index!=-1){
//         this._event[event].splice(index,1);
//         if(usecapture){
//             this.removeEl(event,callback,true);
//         }else{
//             this.detachEvent("on"+event,callback);
//         }
//     }
// }

// const DeepCompare = (obj1,obj2)=>{
//    if(obj1==obj2)return true;

//    if(typeof(obj1)!=="object"||typeof(obj2)!=="object"||obj1==null||obj2==null){
//     return false;
//    }
//    let keys1 = Object.keys(obj1);
//    let keys2 = Object.keys(obj2);

//    if(keys1.length!==keys2.length)return false;

//    for(let key of obj1){
//     if(!keys2.includes(key)||!DeepCompare(obj1[key],obj2[key])){
//         return false;
//     }
//    }
//    return true;
// }
// //join polyfill
// Array.prototype.Myjoin=function(separator){
//     let str="";
//     if(!Array.isArray(this)){
//         throw new TypeError("not an array!");
//     }
//     for(let i=0;i<this.length;i++){
//         if(i>0){
//             str+=separator;
//         }
//         if(this[i]!==null&&this[i]!==undefined){
//             str+=this[i];
//         }
//     }
//     return str;
// }
// console.log(commonarr.Myjoin("-"));
// //shallow copy 
// const Shallow=(obj)=>{
//     if(Array.isArray(obj)){
//         return [...obj];
//         //if array copy spread
//     }
//     else if(obj&&typeof obj=="object"){
//         return {...obj};
//         //if nested just spread object
//     }else{
//         return obj;
//         //primitive value just return value
//     }
// }
// const originalObj = { a: 1, b: { c: 2 } };
//   const copyObj = Shallow(originalObj);
  
//   copyObj.a = 100;
//   copyObj.b.c = 999;
  
//   console.log(originalObj); 
//   console.log(copyObj);  
// //custom lodash 
// const data={a:{b:{c:{d:{e:"my hidden value"}}}}}
// const Lodashed = (obj,path,defaultval)=>{
//     return path.split(".").reduce((acc,key)=>acc[key],obj)||defaultval;
// }
// console.log(Lodashed(data,"a.b.c.d.e","value"))
// //reverse key value, rename property , html tag check
// //rename
// const nestedObjects = {
//     user: {
//       firstName: "John",
//       lastName: "Doe",
//       details: {
//         firstName: "Johnny",
//       },
//     },
//   };
// const renamepro=(obj,old,newp)=>{
//     if(obj.hasOwnProperty(old)){
//         obj[newp]=obj[old];
//         delete obj[old];
//     }
//     Object.keys(obj).forEach((x)=>{
//         if(typeof obj[x]=="object"&&obj[x]!==null){
//             renamepro(obj[x],old,newp)
//         }
//     })
//     return obj;
// }
//   const updatedPerson = renamepro(nestedObjects, "firstName", "AOldFirstName");
//   console.log(updatedPerson)
// //reverse key value
// const myobj={
//     name:"Dibyo",
//     age:"26",
//     address:{
//         line:{
//             newline:"2no. murari mohan sen road"}
//     }
//  }

//  const reversekeyval=(obj)=>{
//     if(typeof obj!=="object"||obj==null)return obj;

//     return Object.fromEntries(Object.entries(obj).map(([key,val])=>{
//         if(typeof val=="object"&&val!==null){
//             return [key,reversekeyval(val)];
//         }
//         return [val,key]
//     })
//   )
//  }
//  console.log(reversekeyval(myobj))


//  //html 
//  const checkHtml=(str)=>{
//     let i=0;
//     let n=str.length;
//     let stack=[];
//     while(i<n){
//       //track starting tag
//       if(str[i]=="<"&&str[i+1]!="/"){
//         let tagstart = i+1;
//         let tagendindex = str.indexOf(">",tagstart);
//         if(tagendindex==-1)return false;
        
//         let tag =  str.slice(tagstart, tagendindex).trim();
//         if (tag.endsWith("/")) { //for self closing tags
//             i = tagendindex + 1;
//             continue;
//         }

//         const tagName = tag.split(" ")[0];
//         stack.push(tagName);
//         i=tagendindex+1;
//       }
//        //track ending tag
//      else if(str[i]=="<"&&str[i+1]=="/"){
//         let tagstart=i+2; //ignore </
//         let tagend = str.indexOf(">",tagstart);
//         if(tagend==-1)return false;
//         let tag =  str.slice(tagstart, tagend).trim();
        

//          //check with stack 
//          if(stack.length==0||tag!==stack.pop()){
//             return false;
//          }
//          i=tagend+1;

//       }
//       else{
//         i++;
//       }
//     }

//     return stack.length===0;
// }
// const html1 = "<div><span></span></div>";
// const html2 = "<div><span></div></span>";
// const html3 = "<div><img src='img.jpg' /></div>";

// console.log(checkHtml(html1));  // true
// console.log(checkHtml(html2));  // false
// console.log(checkHtml(html3));  // true
 
// //event emitter

// class EventEmitter{
//     constructor(){
//         this.event={}
//     }
//     on(event,listener){
//         if(!this.event[event])this.event[event]=[];
//         this.event[event].push(listener);
//     }
//     emit(event,...args){
//         this.event[event].forEach((listener)=>listener(...args));
//     }
//     off(event,listener){
//         if(!this.event[event])return;
//         this.event[event]=this.event[event].filter((l)=>l!==listener)
//     }
// }
// const emit =  new EventEmitter();
// function Greet(str){
//   console.log( `Hi ${str}`)
// }
// function Test(str){
//     console.log(`Roll No.- ${str}`)
// }
// emit.on("SayHi",Greet);
// emit.on("Test",Test);
// emit.off("SayHi",Greet)
// emit.emit("Test","21")
// emit.emit("SayHi","Dibyo!");

// //Groupby with a specific property
// const Grouparr=[{ id: 1, name: "Shubham", departmentId: 101 }, { id: 2, name: "Krutika", departmentId: 101 }, { id: 3, name: "Sakshi", departmentId: 102 }];

// const GroupIt=(arr,property)=>{
//     return arr.reduce((acc,obj)=>{
//         let groupKey = obj[property];
//         if(!acc[groupKey]){
//             acc[groupKey]=[];
//         }
//          acc[groupKey].push(obj);
//          return acc;
//     },{})
// }
// console.log(GroupIt(Grouparr,"departmentId"))


// //classname
// const classNames=(...args)=>{
//     const className=[];
//     args.forEach((arg)=>{
//         if(!arg){
//             return;
//         }
//         if(Array.isArray(arg)){
//             className.push(classNames(...arg));
//             return;
//         }
//         let argtype = typeof arg;
//         if(argtype=="number"||argtype=="string"){
//             className.push(arg);
//             return;
//         }
//         if(argtype=="object"){
//             for(let key in arg){
//                 if(Object.hasOwn(arg,key)&&arg[key]){
//                     className.push(key)
//                 }
//             }
//             return;
//         }
//     })
//     return className.join(" ");
// }


// console.log(classNames('foo', 'bar')); // 'foo bar'
// console.log(classNames('foo', { bar: true })); // 'foo bar'
// console.log(classNames({ 'foo-bar': true })); // 'foo-bar'
// console.log(classNames({ 'foo-bar': false })); // ''
// console.log(classNames({ foo: true }, { bar: true })); // 'foo bar'
// console.log(classNames({ foo: true, bar: false, qux: true })); // 'foo qux'
// console.log(classNames('a', ['b', { c: true, d: false }])); // 'a b c'
// console.log(classNames(
//   'foo',
//   { bar: true, duck: false },
//   'baz',
//   { quux: true }
// )); // 'foo bar baz quux'
// //valueof-->



// //Promise
// Promise.Myall=function(array){
//   let result=[];
//   let count=0;
//   return new Promise((resolve,reject)=>{
//     for(let i=0;i<array.length;i++){
//         let p = array[i];
//         p.then((x)=>{
//             result[i]=x;
//             count++;
//             if(count==array.length){
//                 resolve(result);
//             }
//         }).catch(reject)
//     }
//     return result;
//   })
// }
// // const p1 = new Promise((res,rej)=>{
// //     setTimeout(()=>{
// //         rej("Resolved 1st!")
// //     },1000)
// // })
// // const p2 = new Promise((res,rej)=>{
// //     setTimeout(()=>{
// //         rej("Resolved 2nd!")
// //     },2000)
// // })
// // const p3 = new Promise((res,rej)=>{
// //     setTimeout(()=>{
// //         rej("Resolved 3rd!")
// //     },3000)
// // })
// // Promise.Myall([p1,p2,p3]).then((x)=>console.log(x)).catch(e=>console.log(e));
// Promise.Myany = function(array){
//     let res=[];
//     let count=0;
//     return new Promise((resolve,reject)=>{
//         for(let i=0;i<array.length;i++){
//             let p1=array[i];
//             p1.then(resolve).catch((e)=>{
//                 res[i]=e;
//                 count++;
//                 if(count===array.length){
//                    reject(new AggregateError("error happend",res));
//                 }
//             })
//         }
//     })
// }
// // Promise.Myany([p1,p2,p3]).then((x)=>console.log(x)).catch((e)=>console.log(e))
// Promise.Myallsettle = function(array){
//     const res=[];
//     let count=0;
//     return new Promise((resolve,reject)=>{
//       for(let i=0;i<array.length;i++){
//         let p1=array[i];
//         p1.then((x)=>{
//             res[i]={
//                 status:"success",
//                 value:x
//             }
//         }).catch((e)=>{
//             res[i]={
//                 status:"Rejected",
//                 error:e
//             }
//         }).finally(()=>{
//             count++;
//             if(count==array.length){
//                 resolve()
//             }
//         })
//       }
//       return res;
//     })
// }

// function Mypromise(execute){
//     let isResolve=false;
//     let isReject=false;
//     let isCalled=false;
//     let onResolve;
//     let onReject;
//     let val;
//     let error;
//     function resolve(x){
//         val=x;
//         isResolve=true;
//         if(!isCalled&&typeof onResolve=="function"){
//             onResolve(val);
//             isCalled=true;
//         }
//     }
//     function reject(e){
//          error=e;
//          isReject=true;
//          if(!isCalled&&typeof onReject=="function"){
//             onReject(error);
//             isCalled=true;
//          }
//     }
//     this.then=function(callback){
//         onResolve=callback;
//         if(isResolve&&!isCalled){
//             callback(val);
//             isResolve=true;
//         }
//         return this;
//     }
//     this.catch=function(callback){
//         onReject=callback;
//         if(isReject&&!isCalled){
//             callback(error);
//             isReject=true;
//         }
//         return this;
//     }
//     execute(resolve,reject);
// }

// //design browser history
// // class BrowserHistory{
// //     constructor(){
// //         this.history=[];
// //         this.index=-1;
// //         this.visit=function(url){
// //             this.history[++this.index]=url;
// //         }
// //         this.current = function(){
// //             return this.history[this.index];
// //         }
// //         this.previous = function(){
// //             this.index=Math.max(0,--this.index);
// //         }
// //         this.forward = function(){
// //             this.index = Math.min(this.history.length-1,++this.index)
// //         }
// //     }
// // }

// // const data1 =  new BrowserHistory();

// // data1.visit("https://duckduckgo.com/");
// // data1.visit("https://medium.com/");
// // data1.visit("https://dev.to/");

// // data1.current();
// // console.log(data1.current());
// // data1.previous();
// // console.log(data1.current());
// // data1.forward()
// // console.log(data1.current());
// // data1.previous();
// // data1.previous();
// // data1.previous();
// // console.log(data1.current());


// //memoizeonce
// function Memoizeonce(fn,isequal=check){
//    let lastthis;
//    let lastargs;
//    let lastres;
//    return function(...args){
//     if(lastargs!==null&&isequal(lastargs,args)&&lastthis==this){
//         return lastres;
//     }
//     lastthis=this;
//     lastargs=args;
//     lastres = fn.apply(this,args);
//     return lastres;
//    }
// }
// function check(lastarg,currargs){
//     if(lastarg.length!=currargs.length)return false;
//     for(let i=0;i<lastarg.length;i++){
//         if(lastarg[i]!==currargs[i])return false;
//     }
//     return true;
// }

// const undefinedToNull=(obj)=>{
//     Object.keys(obj).map((value)=>{
//        if(typeof obj[value]=="object"&&obj[value]!==null&&!Array.isArray(obj[value])){
//         undefinedToNull(obj[value])
//        }
//        if(Array.isArray(obj[value])){
//        obj[value]= obj[value].map((x)=>x==undefined?null:x);
//        }
//        else{
//         if(obj[value]==undefined){
//            obj[value]=null
//         }
//        }
       
//     })
//     return obj;
// }
// const re2sq=undefinedToNull(({a: undefined, b: { c: { d: undefined, e: ['BFE.dev', undefined]} }}))
// console.log(re2sq,re2sq.b.c.e);

// //Groupby
// function GroupBy(arr,key){
//     return arr.reduce((acc,obj)=>{
//         let groupkey=obj[key];
//         if(!acc[groupkey]){
//             acc[groupkey]=[];
//         }
//         acc[groupkey].push(obj)
//         return acc;
//     },{})
// }
// const arr2a=[{ id: 1, name: "Shubham", departmentId: 101 }, { id: 2, name: "Krutika", departmentId: 101 }, { id: 3, name: "Sakshi", departmentId: 102 }]
// console.log(GroupBy(arr2a,'departmentId'))

// //----------------latest----------------------//
// //------------------latest--------------------//
// //-----------------latest---------------------//
// //-------------------latest-------------------//
// //---------new start---------------//
// //Apply 
// const testobject={
//     name:"Deep",
//     id:"103"
// }
// function Callobj(city,dist){
//     return `Hey I am ${this.name} my id is ${this.id}, I live in ${city}, of ${dist}`;
// }
// Function.prototype.myApply=function(obj,args){
//     if(typeof this!=="function"){
//         throw new TypeError("error in type!")
//     }
//    if(!Array.isArray(args)){
//     throw new TypeError("error in type!");
//    }
//     obj.fn=this;
//    return  obj.fn(...args)
// }
// console.log(Callobj.myApply(testobject,["Berhampore","West Bengal"]))
// //Call
// Function.prototype.myCall=function(obj,...args){
//    if(typeof this!=="function"){
//     throw new TypeError("error in type!");
//    }
//    obj.fn=this;
//    return obj.fn(...args)
// }
// console.log(Callobj.myCall(testobject,"Gurgaon","Delhi"));
// //Compare deeply nested
// const CompareFun=(obj1,obj2)=>{
//     if(obj1===obj2)return true;
//     if(typeof obj1!=="object"||typeof obj2!=="object"||obj1==null||obj2==null)return false;
//     let keys1=Object.keys(obj1);
//     let keys2=Object.keys(obj2);
//     if(keys1.length!==keys2.length)return false;
//     for(let k of keys1){
//         if(!keys2.includes(k)||!CompareFun(obj1[k],obj2[k]))return false
//     }
//     return true;
// }
// const newtest={
//     name:"DEV",
//     address:{
//         line1:"test line1",
//         line2:"test line2",
//         pin:{
//          list:"742103"
//         }
//     }
// }
// const newtest2={
//     name:"DEV",
//     address:{
//         line1:"test line1",
//         line2:"test line2",
//         pin:{
//             list:"742103"
//            }
//     }
// }
// console.log(CompareFun(newtest,newtest2))
// //concatenate
// Array.prototype.ConCat=function(){
//     let newarr=[];
//     for(let i=0;i<this.length;i++){
//         newarr.push(this[i]);
//     }
//     for(let i=0;i<arguments.length;i++){
//         let arg = arguments[i];
//         if(Array.isArray(arg)){
//             for(let j=0;j<arg.length;j++){
//                 newarr.push(arg[j]);
//             }
//         }else{
//             newarr.push(arg);
//         }
//     }
//     return newarr;
// }
// console.log([1,2,3,4,5].ConCat([1,2,3],3,4))
// //customdeepcopy
// const deepCustomDeepest=(obj)=>{
//    if(typeof obj!=="object"||obj==null)return obj;
//    if(Array.isArray(obj)){
//     return obj.map((x)=>deepCustomDeep(x));
//    }
//    let newobj={};
//    for(let x in obj){
//       newobj[x]=deepCustomDeepest(obj[x])
//    }
//    return newobj;
// }
// const testobjecte={
//     name:"test",
//     address:{
//         line1:"test1"
//     }
// }
// const finalobj = deepCustomDeepest(testobjecte);
// console.log(finalobj)

// //flat array and object
// //recursive approach
// Array.prototype.MFlat=function(){
//     let final=[];
//     for(let i of this){
//       if(Array.isArray(i)){
//         final.push(...i.MFlat());
//       }else{
//         final.push(i)
//       }
//     }
//     return final;
// }
// //iterative approach
// Array.prototype.RFlat=function(){
//     let final=[...this];
//     let curr=0;
//     while(curr<final.length){
//         let el=final[curr];
//         if(Array.isArray(el)){
//             final.splice(curr,1,...el)
//         }else{
//             curr++;
//         }
//     }
//     return final; 
// }
// console.log([2,3,4,[4,5,6,[7,8,9,[10,11,12]]]].RFlat())

// const inputobject = {
//     name: 'Mansi',
//     age: 25,
//     department: {
//       name: 'Customer Experience',
//       section: 'Technical',
//       branch: {
//          name: 'Bangalore',
//          timezone: 'IST'
//       }
//     },
//     company: {
//      name: 'SAP',
//      customers: ['Ford', 'Nestle']
//     },
//     skills: ['javascript', 'node.js', 'html']
//   }
//   const inputobject2 = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     },
//     f: null
// };
// const deepflatobj=(obj,key='')=>{
//     let res={};
//     for(let k in obj){
//         let newkey = key?`${key}.${k}`:`${k}`;
//         if (!obj.hasOwnProperty(k)) continue; 
//         if(typeof obj[k]=="object"&&!Array.isArray(obj[k])&&obj[k]!==null){
//             res={...res,...deepflatobj(obj[k],newkey)};
//         }
//         else{
//             res[newkey]=obj[k];
//         }
//     }
//     return res;
// }
// console.log(deepflatobj(inputobject))

// //filter
// Array.prototype.myFill = function(cb){
//     if(!Array.isArray(this)){
//         throw new TypeError("error is type!")
//     }
//     let res=[];
//     for(let i=0;i<this.length;i++){
//       if(cb(this[i])){
//         res.push(this[i])
//       }
//     }
//     return res;
// }
// console.log([1,2,3,4,5,6,7].myFill((x)=>x%2==1))
// //custom load->
// const datas = { a: { b: { c: 42 } } };
// const cust=(obj,path,val)=>{
//    return path.split(".").reduce((acc,key)=>acc[key],obj)||val
// }
// console.log(cust(datas,"a.b.c","default"));
// //foreach
// Array.prototype.myFor = function(cb){
//     for(let i=0;i<this.length;i++){
//          cb(this[i])
//     }
// }
// console.log([2,4,5,6].myFor((x)=>x**2))
// //map
// Array.prototype.myMap=function(cb){
//   let res=[];
//   for(let i=0;i<this.length;i++){
//     res.push(cb(this[i]))
//   }
//   return res;
// }
// console.log([4,2,6,8].myMap((x)=>x**3));

// Function.prototype.myApply = function(args1){
//     let args = args1.slice(1);
//     let obj = this;
//     return function(...args2){
//         return obj.apply(args1[0],[...args,...args2])
//     }
// }


// //join 
// Array.prototype.myJoin = function(value){
//     let str="";
//     for(let i=0;i<this.length;i++){
//         if(i>0){
//             str+=value;
//         }
//         if(this[i]!==undefined&&this[i]!==null){
//             str+=this[i]
//         }
//     }
//     return str;
// }
// console.log([1,2,3,4].myJoin("-"));


// //theory 
// const a=[1,2,3,4,5]
// const [b,c]=[...a]//spread
// const [x,...y]=a;//rest 
// console.log(b,c,x,y)
// const ax={
//     name:"test",age:20,num:'23'
// }
// const {name,...rest}=ax;
// console.log(name,rest)
// const p=new Promise((res,rej)=>{
//     setTimeout(()=>{
//        res("print after 3sec")
        
//     },3000)
// })
// // p.then((x)=>console.log(x)).catch((e)=>console.log(e))


// function sum(a,b){
//     let x=10;
//     return function(c){
//         console.log(x)
//        return a+b+c+x;
//     }
// }
// console.log(sum(10,10)(10))

//--------new-----------
//started 
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
const customdeep=(obj)=>{
    if(typeof obj!=="object"||obj==null)return obj;

    if(Array.isArray(obj)){
        return obj.map((x)=>customdeep(x));
    }
    let newobj={};
    for(let key in obj){
        newobj[key]=customdeep(obj[key]);
    }
    return newobj;
}
const test=customdeep(demo);
console.log(test);
const data={a:{b:{c:42}}}
// console.log(get(data, "a.b.c", "default"));
//lodash
const lodash=(data,property,value)=>{
    return property.split(".").reduce((acc,key)=>acc[key],data)||value;
}
console.log(lodash(data,"a.b.c","default"));
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
console.log([1,3,5,7,9].myReverse())//time complexity 0(n/2)
//findindex||findmethod
Array.prototype.myFindindex=function(cb){
    if(!Array.isArray(this)){
        throw new TypeError("not an array");
    }
    for(let i=this.length;i>=0;i--){
        if(cb(this[i])){
            return this[i];
        }
    }
    return -1;
}
console.log([2,4,6,8].myFindindex((x)=>x%2==0));

//compare deeply nested
const testObj1={
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
const testObj2={
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

const deepCompare=(obj1,obj2)=>{
    if(obj1===obj2)return true;
    if(typeof obj1!=="object"||typeof obj2!=="object"||obj1==null||obj2==null)return false;

    let keys1=Object.keys(obj1);
    let keys2=Object.keys(obj2);

    if(keys1.length!=keys2.length)return false;

    for(let key of keys1){
        if(!keys2.includes(key)||!deepCompare(obj1[key],obj2[key])){
            return false;
        }
    }
    return true;
}
console.log(deepCompare(testObj1,testObj2))

//throttle
// const called=throttle(()=>{
//    document.getElementById("button").disabled=false;
// },2000)
// const throttle=(fn,delay)=>{
//   return function(...args){
//     document.getElementById("button").disabled=true;
//     setTimeout(()=>{
//        fn(...args);
//     },delay)
//   }
// }
//debounce
const debounce=(fn,delay)=>{
    let timer=null;
    return function(...args){
        if(timer)clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(...args);
        },delay)
    }
}
//memoize 
const memo=(fn)=>{
  let argscache={};
  return function(...args){
    let key = JSON.stringify(...args);
    if(!argscache[key]){
        argscache[key]=fn.call(this,...args);
    }
    return argscache[key]
  }
}
const testsm=(a,b)=>{
  return a*b;
}
const memoized=memo(testsm);
console.log(memoized(11,22))

//once
const Once=(fn)=>{
    let ran;
    let called=false;
    return function(...args){
        if(!called){
            ran=fn.call(this,...args);
            called=true;
        }
        return ran;
    }

}
//event emitter
class EventEmitter{
    constructor(){
        this.events={};
    }
    on(event,listener){
       if(!this.events[event])this.events[event]=[];
       this.events[event].push(listener);
    }
    emit(event,...args){
       if(!this.events[event])return;
       this.events[event].forEach((listener)=>listener(...args));
    }
    off(event,listener){
       if(!this.events[event])return;
       this.events[event]=this.events[event].filter((l)=>l!==listener);
    }
}
const mylist = new EventEmitter();
function log(x){
    console.log("hello "+x)
}
mylist.on("log",log)
console.log("---")
mylist.emit("log","Dibyo");
mylist.off("log",log);
mylist.emit("log","Dev")

//event listeners-->
//addeventListener
function AddEventListener(eventname,callback,usecapture){
    if(!this._events)this._events={};
    if(!this._events[eventname])this._events[eventname]=[];
    this._events[eventname].push(callback);
   if(this.attachEvent){
    this.attachEvent("on"+eventname,callback);
   }else{
    this["on"+eventname]=callback;
   }
}
//remove
function RemoveEventListener(eventname,callback){
    if(!this._events||!this._events[eventname])return;
    let index = this._events[eventname].indexOf(callback);
    if(index!=-1){
        this._events.splice(index,1);
        if(this.detachEvent){
            this.detachEvent("on"+eventname,callback);
        }else{
            this._events["on"+eventname]=null;
        }
    }
}

//assign 
function myAssign(target,...sources){
    if (target == null) {
        throw new TypeError("Cannot convert undefined or null to object");
    }

    const to = Object(target);

    for (let source of sources) {
        if (source != null) {
            for (let key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    const srcVal = source[key];
                    const tgtVal = to[key];

                    // Check if both values are plain objects
                    const isObject = val =>
                        val &&
                        typeof val === "object" &&
                        !Array.isArray(val) &&
                        !(val instanceof Date);

                    if (isObject(srcVal) && isObject(tgtVal)) {
                        // Recursive merge
                        to[key] = Object.myAssign({}, tgtVal, srcVal);
                    } else {
                        // Overwrite
                        to[key] = srcVal;
                    }
                }
            }
        }
    }
    return to;
}

let target={a:1,f:6};
let s1={a:2,b:3,c:{d:"5"}}
let s2={f:8}

console.log(myAssign(target,s1,s2))

//str to obj

//{a:{b:{c:"finalvalue"}}}
function StrToObj(str,value){
    let res={};
    let curr=res;
    let final = str.split(".");
    for(let i=0;i<final.length-1;i++){
        res[final[i]]={};
        res = res[final[i]];
    }
    res[final[final.length-1]]=value;
    return curr;
}
// console.log
console.log(StrToObj("a.b.c", "finalvalue"));
//1,000, 10,000, 1,000,00, 10,000,00
//extra pdt based
//addcomma to money 
function Comma(num){
    const [integer,decimal]=num.toString().split(".");
    console.log(integer)
    const digits = integer.split('').reverse();
    console.log(digits)
    const parts=[];
    for(let i=0;i<digits.length;i++){
        if(i>0&&i%3===0){
            parts.push(",");
        }
        parts.push(digits[i]);
    }
    console.log(parts);
    const formatted = parts.reverse().join('');
    return decimal?`${formatted}.${decimal}`:`${formatted}`

}
console.log(Comma(100000));
//browser history
function BrowserHistory(){
    this.History=[];
    this.index=-1;
    this.visit=function(url){
        this.History.push(url);
    }
    this.current=function(){
        return this.History[this.index];
    }
    this.forward=function(){
        return Math.max(this.History.length-1,++this.index);
    }
    this.prev=function(){
       return Math.min(0,--this.index)  
    }
}
const arr=[{ id: 1, name: "Shubham", departmentId: 101 }, 
    { id: 2, name: "Krutika", departmentId: 101 },
     { id: 3, name: "Sakshi", departmentId: 102 }]

function GroupBy(arr,grpkey){
   return arr.reduce((acc,obj)=>{
        let groupkey = obj[grpkey];
        if(!acc[groupkey]){
            acc[groupkey]=[];
        }
        acc[groupkey].push(obj.name);
        return acc;
   },{})
}
console.log(GroupBy(arr,"departmentId"))
//classname

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
function classNames(...args){
//   console.log(args)
    let res=[];
    args.forEach((ar)=>{
        if(!ar){
            return;
        }
        const argType = typeof ar;
        if(typeof ar=="number"||typeof ar=="string"){
            // console.log(ar)
            res.push(ar);
            return;
        }
        if(Array.isArray(ar)){
            // console.log(ar)
            res.push(classNames(...ar));
            return;
        }
        if(argType==="object"){
            for(let key in ar){
                if(Object.hasOwn(ar,key)&&ar[key]){
                    
                    res.push(key);
                }
            }
            return;
        }
    })
    return res.join(" ");
}

function PrevNode(root,target){
    if(!root) return;
    let que=[root];
    // let prev=null;
    while(que.length){
       let len=que.length;
       let prev=null;
       for(let i=0;i<len;i++){
        let a=que.shift();
        if(a===target)return prev;
        que.push(...a.children);
        prev=a;
       }

    }
}
function OnceMemo(fn,isEqual=lastEqual){
    let lasthis;
    let lastargs=null;
    let lastres;
    return function(...args){
        if(lasthis==this&&isEqual(lastargs,args)&&lastargs!=null){
            return lastres;
        }
        lasthis=this;
        lastargs=args;
        lastres=fn.apply(this,...args);
        return lastargs
    }
}
function isEqual(args1,args2){
    if(args1.length!==args2.length)return false;
    for(let i=0;i<args1.length;i++){
        if(args1[i]!==args2[i]){
            return false
        }
    }
    return true;
}

