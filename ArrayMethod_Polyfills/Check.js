//call apply bind
const callObject={
    name:"Dibyojyoti Mukherjee",
    age:"26",
    occ:"SSE"
}

function create(state,city){
    console.log(`Hey I am ${this.name}, I am ${this.age}years old I am a ${this.occ}, lived in ${state} from ${city}`)
}
Function.prototype.MyCall=function(obj,...args){
   if(typeof this!=="function"){
    throw new TypeError("error in type!")
   }
   obj.fn=this;
   obj.fn(...args);
}

create.MyCall(callObject,"west bengal","Berhampore");
//apply 
Function.prototype.myApply = function(obj,args){
    if(typeof this!=="function"){
        throw new TypeError("error in type!");
    }
    if(!Array.isArray(args)){
        throw new TypeError("error it's not an array!")
    }
    obj.fn=this;
    obj.fn(...args);
}
create.myApply(callObject,["Mumbai","Pune"]);
//bind
Function.prototype.myBind=function(...args){
   let obj=this;
   let args1=args.slice(1);
   return function(...args2){
     return obj.apply(args[0],[...args1,...args2])
   }
}
const test=create.myBind(callObject,"Karnataka","Bangalore");
test();
//map reduce filter
Array.prototype.myMap=function(cb){
    if(!Array.isArray(this)){
        throw new TypeError("Error here!")
    }
    let arr=[];
    for(let i=0;i<this.length;i++){
        arr.push(cb(this[i]))
    }
    return arr;
}
console.log([2,3,5,6].myMap((x)=>x**2));
Array.prototype.myFilter = function(cb){
    let res=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            res.push(this[i])
        }
    }
    return res;
}
console.log([2,3,5,6].myFilter((x)=>x%2==1));
Array.prototype.myReduce=function(cb,initial){
  let acc=initial;
  for(let i=0;i<this.length;i++){
    acc=acc?cb(this[i],acc):this[i]
  }
  return acc;
}
console.log([2,3,5,6].myReduce((x,sum)=>x+sum,0));
//find findindex findlast
Array.prototype.myFind=function(cb){
    if(!Array.isArray(this)){
        throw new TypeError("this is not array!");
    }
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            return this[i];
        }
    }
    return -1;
}
console.log([2,6,7,8,9].myFind((x)=>x%2==1));
Array.prototype.myFindIndex=function(cb){
    if(!Array.isArray(this)){
        throw new TypeError("this is not array!");
    }
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            return i;
        }
    }
    return -1;
}
console.log([2,6,7,8,9].myFindIndex((x)=>x%2==1));
//array flat
Array.prototype.myFlat=function(){
    let res=[];
    for(let x of this){
        if(Array.isArray(x)){
            res.push(...x.myFlat());
        }else{
            res.push(x)
        }
    }
    return res;
}
//iterative
Array.prototype.myFlatten=function(){
    let arr=[...this];
    let curr=0;
    while(curr<arr.length){
        let val=arr[curr];
        if(Array.isArray(val)){
            arr.splice(curr,1,...val);
        }else{
            curr++;
        }
    }
    return arr;
}
console.log([1,2,[3,4,[5,6,[7,8,[9,10]]]]].myFlatten())
//array methods extra
//object flatten
const FlattenObj=(obj,keys='')=>{
    let res={};
    for(let key in obj){
        let newkey = keys?`${keys}.${key}`:`${key}`;
        if(typeof obj[key]=="object"&&!Array.isArray(obj[key])&&obj[key]!==null){
            res={...res,...FlattenObj(obj[key],newkey)};
        }else{
          res[newkey]=obj[key];
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
console.log(FlattenObj(input));
//debounce
const Debounce = (fn,delay) =>{
   let timer=null;
   return function(...args){
    if(timer)clearTimeout(timer);
    timer=setTimeout(()=>{
        fn(...args);
    },delay)
   }
}
//throttle
const throttle=(fn,delay)=>{
    return function(...args){
        setTimeout(()=>{
            fn(...args);
        },delay)
    }
}
//join
function JoinPolyfill(arr,sep){
   let str='';
   for(let i=0;i<arr.length;i++){
    if(i>0){
      str+=sep;
    }
    if(arr[i]!==undefined&&arr[i]!==null){
        str+=arr[i];
    }
   }
   return str;
}
console.log(JoinPolyfill([1,2,3,4,6,7],"-"));

//Memoize
const Memo=(fn)=>{
    let resCache={};
   return function(...args){
      let argsCache = JSON.stringify(...args);
      if(!resCache[argsCache]){
          resCache[argsCache]=fn.call(this,...args);
      }
      return resCache[argsCache];
   }
}
const multiply=(a,b)=>{
    return a*b;
}
const tests = Memo(multiply);
console.time();
console.log(tests(999,888));
console.timeEnd();

console.time();
console.log(tests(999,888));
console.timeEnd()

//Once
// const Once = (fn)=>{
//     let isCalled=false;
//     let ran;
//     return function(...args){
//         if(!isCalled){
//            ran=fn.apply(this,...args);
//            isCalled=true;
//         }
//         return ran;
//     }
// }
// const change=(num1,num2)=>{
//   console.log("1111",num1,num2);
// }
// const res=Once(change(1,2));
// res();
// res();
// res();

//compare deeply nested
const Deeply=(obj1,obj2)=>{
   if(obj1===obj2)return true;
   if(typeof obj1!=="object"||typeof obj2!=="object"||obj1==null||obj2==null){
    return false;
   }
   const keys1=Object.keys(obj1);
   const keys2 = Object.keys(obj2);
   if(keys1.length!==keys2.length)return false;
   for(let key of keys1){
    if(!keys2.includes(key)||!Deeply(keys1,keys2)){
        return false;
    }
   }
   return true;
}
//concatenate
Array.prototype.myConcat=function(){
    let res=[];
    for(let i=0;i<this.length;i++){
        res.push(this[i]);
    }
    for(let i=0;i<arguments.length;i++){
        let arg=arguments[i];
        if(Array.isArray(arg)){
            for(let j=0;j<arg.length;j++){
                res.push(arg[j]);
            }
        }
        else{
            res.push(arg)
        }
    }
    return res;
}
console.log([1,2,4,5].myConcat(1,2,[22,3]));

const CustDeep=(obj)=>{
  if(typeof obj!=="object"||obj==null)return obj;
  if(Array.isArray(obj)){
    return obj.map((x)=>CustDeep(x));
  }
  let newobj={};
  for(let key in obj){
      newobj[key]=CustDeep(obj[key]);
  }
  return newobj;

}
let finalres = CustDeep(input);
console.log(finalres);

//custom lodash
function GetValue(obj,path,defaultValue){
 return path.split(".").reduce((acc,key)=>acc?.[key],obj)||defaultValue
}
const data = { a: { b: { c: 42 } } };
console.log(GetValue(data, "a.b.c", "default")); 

//Shift
function CustomShift(arr){
   if(!Array.isArray){
    throw new TypeError("not an array")
   }
   if(arr.length==0)return undefined;
   const firstElement=arr[0];
   for(let i=1;i<arr.length;i++){
    arr[i-1]=arr[i];
   }
   arr.length--;
   return firstElement;
}
console.log(CustomShift([12,3,4,45,0]));
//slice method
function mySlice(arr,start,end){
   if(!Array.isArray(arr)){
    throw new TypeError("not an array!");
   }
   const length=arr.length;
   let starindex=start||0;
   let endIndex=end||0;
   if(starindex<0){
    starindex=Math.max(starindex+length,0);
   }
   if(endIndex<0){
    endIndex=Math.max(endIndex+length,0);
   }
   const res=[];
   for(let i=starindex;i<endIndex&&i<arr.length;i++){
    res.push(arr[i]);
   }
   return res;
}

const stringToObject=(str,value)=>{
   let res={};
   let curr=res;
   let arr=str.split(".");
   for(let i=0;i<arr.length-1;i++){
    curr[arr[i]]={};
    curr=curr[arr[i]]
   }
   curr[arr[arr.length-1]]=value;
   return res;
}
console.log( stringToObject("a.b.c", "someValue"));
//Eventemitter
class EventEmitter{
    constructor(){
        this.events={}
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
       this.events[event].filter((l)=>l!==listener);
    }
}
function Unshift(arr,...elements){
    const newarr=[...elements,...arr];
    arr.length=0;
    arr.push(...newarr);
    return arr.length;
}
//trim
String.prototype.myTrim=function(){
    let len=this.length;
    let start=0;
    let end=this.length-1;
    while(this[start]==" "&&start<=end){
        start++;
    }
    while(this[end]==" "&&end>=start){
        end--;
    }
    return this.substring(start,end+1)
}
console.log("    shello ".myTrim());
//custom deepcopy
const CustDeepCopy = (obj)=>{
    if(typeof obj!=="object"||obj===null)return obj;
    if(Array.isArray(obj)){
        return obj.map((x)=>CustDeepCopy(x));
    }
    let newobj={};
    for(let key in obj){
        newobj[key]=CustDeepCopy(obj[key])
    }
    return newobj;
}
const testinput = CustDeepCopy(input);
console.log(testinput);

//getelement series-->
//id->
function GetById(id){
    function traverse(node){
        if(node.id===id)return node;
        for(let child of node.children){
           let res=traverse(child);
           if(res)return res;
        }
        return null;
    }
    return traverse(document.body);
}
function GetByTag(tag){
    let tagName=tag.toLowerCase();
    let res=[];
    function traverse(node){
        if(node.tagName&&node.tagName.toLowerCase()===tagName)res.push(node);
        for(let child of node.children){
            traverse(child);
        }
    }
     traverse(document.body);
     return res;
}
function GetByName(name){
    let res=[];
    function traverse(node){
        let namecom = node.getAttribute("name");
        if(namecom===name)res.push(node);
        for(let child of node.children){
            traverse(child)
        }
    }
    traverse(document.body);
    return res;
}
function hasClass(nodeClass,classes){
    let all = nodeClass.trim().split(" ");
    let search = classes.trim().split(" ");
    return search.every((cl)=>all.includes(cl));
}
function GetByClassName(className){
    let res=[];
    function traverse(node){
        if(node.nodeType===1&&typeof node.className==="string"&&hasClass(node.className,className)){
             res.push(node);
        }
        for(let child of node.children){
            traverse(child);
        }
    }
    traverse(document.body);
    return res;
}

function QuerySelector(selectors){
   var idselects = selectors.split("#")[1];
   var classselects = selectors.split("*")[1]; 
   var tagselects = selectors.split(' ')[0];

   if(idselects){
    document.getElementById(idselects);
   }else if(classselects){
    var elements = document.getElementsByTagName("*");
    for(let i=0;i<elements.length;i++){
        var classnames = elements[i].className.split(" ");
        if(classnames.indexOf(classselects)!==-1){
            return elements[i];
        }
    }
   }else if(tagselects){
    return document.getElementsByTagName(tagselects)[0]
   }else{
    return null;
   }
}
//promise polyfills
//all
Promise.myAll=function(promises){
    let result=[];
    let count=0;
    return new Promise((res,rej)=>{
        for(let i=0;i<promises.length;i++){
            let p=promises[i];
            p.then((x)=>{
                count++;
                result[i]=x;
                if(count===promises.length){
                    res(result);
                }
            }).catch(rej)
        }
        return res;
    })
}
//any
Promise.myAny=function(promises){
   let errorar=[];
   let count=0;
   return new Promise((res,rej)=>{
    for(let i=0;i<promises.length;i++){
        let p=promises[i];
        p.then(res).catch((e)=>{
            count++;
            errorar[i]=e;
            if(count===promises.length){
                rej(new AggregateError(errorar,"all promises rejected!"))
            }
        })
    }
   })
}
//allsettle
Promise.myAllSettle = function(promises){
    let res=[];
    let count=0;
    return new Promise((resolve,reject)=>{
        for(let i=0;i<promises.length;i++){
            let p1=promises[i];
            p1.then((x)=>{
                res[i]={
                    status:"Success",
                    value:x
                }
            }).catch((e)=>{
                res[i]={
                    status:"Reject",
                    error:e
                }
            }).finally(()=>{
                count++;
                if(count===promises.length){
                    resolve(res)
                }
            })
        }
        return res;
    })
}
// Promise
//race
Promise.myRace = function(promises){
   return new Promise((res,rej)=>{
    promises.forEach((x)=>{
        x.then(res).catch(rej)
    })
   })
}
//promise
function MyPromise(execute){
    let isCalled=false;
    let isRejected=false;
    let isResolved=false;
    let value,error,onResolve,onReject;
    function Resolve(val){
        value=val;
        isResolved=true;
        if(typeof onResolve=="function"&&!isCalled){
            onResolve(value);
            isCalled=true;
        }
    }
    function Reject(err){
        error=err;
        isRejected=true;
        if(typeof onReject=="function"&&!isCalled){
            onReject(error);
            isCalled=true;
        }
    }
    this.then=function(callback){
        onResolve=callback;
        if(!isCalled&&isResolved){
            callback(value);
            isResolved=true;
        }
        return this;
    }
    this.catch=function(callback){
        onReject=callback;
        if(!isCalled&&isRejected){
            callback(error);
            isRejected=true;
        }
        return this;
    }
    execute(Resolve,Reject);
}

//promise

//promise methods 
//all
Promise.prototype.myAll=function(promises){
   let res=[];
   let count=0;
   return new Promise((resolve,rej)=>{
       for(let i=0;i<promises.length;i++){
        let p=promises[i];
        p.then((x)=>{
            res[i]=x;
            count++;
            if(count===promises.length){
                resolve(res)
            }
        }).catch(rej)
       }
       return res;
   })
}
//any
Promise.prototype.myAny=function(promises){
    let errorarr=[];
    let count=0;
    return new Promise((resolve,reject)=>{
        for(let i=0;i<promises.length;i++){
            let p=promises[i];
            p.then((x)=>{
                resolve(x);
            }).catch((e)=>{
                errorarr[i]=e;
                count++;
                if(count===promises.length){
                    reject(new AggregateError(errorarr,"All are rejected!"))
                }
            })
        }
    })
}
//allsettle
Promise.prototype.myAllSettle=function(promises){
    let result=[];
    let count=0;
    return new Promise((res,rej)=>{
        for(let i=0;i<promises.length;i++){
            let p=promises[i];
            p.then((x)=>{
                result[i]={
                    status:"success",
                    value:x
                }
            }).catch((e)=>{
                result[i]={
                    status:"rejected",
                    error:e
                }
            }).finally(()=>{
                count++;
                if(count===promises.length){
                    res(result);
                }
            })
        }
        return res;
    })
}
//race
Promise.prototype.myRace=function(promises){
   return new Promise((res,rej)=>{
    promises.forEach((x)=>x.then(res).catch(rej));
   })
}