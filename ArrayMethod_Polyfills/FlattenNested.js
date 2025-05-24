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