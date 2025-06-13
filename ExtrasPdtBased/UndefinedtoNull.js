function undefinedToNull(obj) {
    // your code here
     Object.keys(obj).map((x)=>{
      if(typeof obj[x]=="object"&&obj[x]!==null&&!Array.isArray(obj[x])){
         undefinedToNull(obj[x])
      }
      if(Array.isArray(obj[x])){
         obj[x]=obj[x].map((val)=>val==undefined? null:val)
      }
      else{
        if(obj[x]==undefined){
         obj[x]=null;
        }
      }
    })
    return obj
  }
  //great
  const res=undefinedToNull(({a: undefined, b: { c: { d: undefined, e: ['BFE.dev', undefined]} }}))
  console.log(res,res.b.c.e)