// Write a function which converts string input into an object
// stringToObject("a.b.c", "someValue");
// output -> {a: {b: {c: "someValue"}}}

function stringToObject(str, finalValue) {
    // your logic here
    const key=str.split(".");
    let res={};
    let curr=res;

    // console.log(key);
    for(let i=0;i<key.length-1;i++){
        curr[key[i]]={};
        curr=curr[key[i]]
        
    }
    curr[key[key.length-1]]=finalValue
    // console.log(res)
   return res
  }
//   console.log(stringToObject("a.b.c","somevalue"))

  //using reduce method-->
  function StrToObj(str, finalValue) {
    let key = str.split(".");
    return key.reduce((acc, key, i, arr) => {
      // If it's the last key, assign the final value
      if (i === arr.length - 1) {
        acc[key] = finalValue;
      } else {
        // Otherwise, create an empty object at this key if it doesn't exist
        acc[key] = acc[key] || {};
      }
      return acc[key]; // Move to the next level in the object
    }, {});
  }
  
  console.log(StrToObj("a.b.c", "finalvalue"));
  