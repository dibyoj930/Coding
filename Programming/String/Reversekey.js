const reversekey=(obj)=>{
   if(obj==null||typeof obj!=='object')return obj;


   return Object.fromEntries(
      Object.entries(obj).map(([key,val])=>{
         if(typeof val=="object"&&val!==null){
            return [key,reversekey(val)];
         }
         return [val,key]
      })
   
   )
}
const myobj={
   name:"Dibyo",
   age:"26",
   address:{
       line:"2no. murari mohan sen road"
   }
}
console.log(reversekey(myobj));