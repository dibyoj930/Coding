//Object assign polyfills->
Object.prototype.myAssign=function(target,...sources){
    if(target==null||target==undefined){
        throw new TypeError("enter object")
    }
    let to=Object(target)
    for(let i=0;i<sources.length;i++){
       let s=sources[i];
       if (s !== null && s !== undefined) {
       for(let key of Object.keys(s)){
        to[key]=s[key]
       }
       //if source is like an array like object->
       if(typeof s =="object"){
          for(let key in s){
            if(Object.prototype.hasOwnProperty.call(s,key)){
                to[key]=s[key]
            }
          }
       }}
    }
    return to;
}
let target={a:1,f:6};
let s1={a:2,b:3,c:{d:"5"}}
let s2={f:8}

console.log(Object.myAssign(target,s1,s2))