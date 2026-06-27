const getcorrect=(str,max)=>{
   return str.length>max?str.slice(0,max)+'...':str;
}
const s = "This is a very long string that needs to be truncated.";
const maxLen = 20;
console.log(getcorrect(s, maxLen));