const nonrepeat=(str)=>{
   let map=new Map();
   for(let k of str){
    map.set(k,(map.get(k)||0)+1)
   }
//   console.log(map)
   for(let k of str){
    if(map.get(k)==1){
        return k;
    }
   }
   return null;
}

console.log(nonrepeat("Dibyojyotid"));
//one liner
const nonfirst = (str) =>
    str.split("").find((char) => str.indexOf(char) === str.lastIndexOf(char));
  console.log(nonfirst("programming"));