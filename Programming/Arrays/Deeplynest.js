const objtest = { a: { b: { c:{d:{e: "new property of mine" }}} } };
const path = "a.b.c.d.e";
const Getnest=(obj,path)=>{
  return path.split(".").reduce((acc,key)=>acc&&acc[key],obj)
}
console.log(Getnest(objtest,path))