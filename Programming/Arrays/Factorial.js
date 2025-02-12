const fact=(n)=>{
  if(n<1)return "enter something proper!";
  return [...Array(n).keys()].reduce((acc,n)=>acc*(n+1),1)
}
console.log(fact(5))