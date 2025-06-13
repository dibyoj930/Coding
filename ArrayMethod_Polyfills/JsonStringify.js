var myObject = {
    name: "Alice",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "gaming", "hiking"],
    details: {
        hair: "brown",
        height: 165
    },
    // Non-serializable properties (functions) will be ignored in the output
    greet: function() { return `Hello, my name is ${this.name}`; }
};
// OUTPUT: '{"name":"Alice","age":30,"isStudent":false,"hobbies":["reading","gaming","hiking"],"details":{"hair":"brown","height":165}}'
function stringify(obj){
    if(obj==null){
        return "null";
    }
    if(typeof obj=="string"){
        return `"${obj}"`;
    }
    if(typeof obj=="number"||typeof obj=="boolean"){
        return obj.toString();
    }
    if(Array.isArray(obj)){
        let arrobj=obj.map((x)=>stringify(x)).join(',');
        return `[${arrobj}]`
    }
    if(typeof obj=="object"){
        let key=Object.keys(obj);
        const keyofobj=key.map((val)=>{
            let strval=stringify(obj[val]);
            if(strval===undefined||typeof obj[val]=="function"){
                return "";
            }
            return `"${val}":${strval}`;
        }).filter(Boolean)
        return `{${keyofobj.join(",")}}`
    }
    return undefined;
}
console.log(stringify(myObject));