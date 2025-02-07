// There are 3 scenarios in the deepcopy
// 1. Base Case->If its a null value or normal function,string, or values this need not further copy so return them
// 2. Arrays->If this is an array we have to create a new array use map to iterate over the array and copy elements
// 3. Objects->If it's an object again just iterates over each key and recursively copies it's values building a new obj.
const DeepCopy=(obj)=>{
    if(obj==null||typeof obj!=='object')return obj;

    if(Array.isArray(obj)){
        return obj.map((x)=>DeepCopy(x));
    }
    let newobj={};
    for(let key in  obj){
        newobj[key]=DeepCopy(obj[key])
    }
    return newobj;
}

const demo={
    name:"Dibyo",
    address:{
        line1:'2no murari mohan sen road',
        line2:'Berhampore',
        Pincode:{
            first:"742",
            second:"103"
        }
    }
}
const newobject = DeepCopy(demo)
console.log("created object->",demo);
console.log("copied object->",newobject)