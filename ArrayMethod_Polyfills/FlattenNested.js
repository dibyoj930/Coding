//Flatten a deeply nested object
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

//Flatting deeply nested object
const DeepFlat = (input,keyName)=>{
    var result={};
    for(let key in input){
        let newkeyname = keyName?`${keyName}.${key}`:key;
        if(typeof input[key]=='object'&&!Array.isArray(input[key])){
            result={...result,...DeepFlat(input[key],newkeyname)}
        }else{
            result[newkeyname]=input[key]
        }
    }
    return result;
}

console.log("Flatted Object->",DeepFlat(input))

//squash Object all condition covered
export default function squashObject(obj, key = "") {
    let res = {};
    for (let k in obj) {
      let cleankey = k==''?'':k;
      let newkey = key ?( cleankey?`${key}.${cleankey}`:key) : `${cleankey}`;
      if (
        typeof obj[k] === "object" &&
        obj[k] !== null &&
        !Array.isArray(obj[k])
      ) {
        res = { ...res, ...squashObject(obj[k], newkey) };
      } else if (Array.isArray(obj[k])) {
        obj[k].forEach((item, index) => {
          let arrkey = `${newkey}.${index}`;
          if (typeof item === "object" && item !== null) {
            res = { ...res, ...squashObject(item, arrkey) };
          }else{
            res[arrkey]=item;
          }
        });
      } else {
        res[newkey] = obj[k];
      }
    }
    return res;
  }
  const object = { a: { b: [1, 2, 3], c: ['foo'] } };
  squashObject(object); // { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3, 'a.c.0': 'foo' }
  const object2 = {
    foo: {
      '': { '': 1, bar: 2 },
    },
  };
  squashObject(object2); // { foo: 1, 'foo.bar': 2 }
      