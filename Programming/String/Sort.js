//sort an array of strings 
const fruits = ['banana', 'Apple', 'orange', 'Mango'];
console.log(fruits.sort());//uppercase sorted before lower case letters
//sort based on custom operator
const mixedFruits = ['banana', 'Apple', 'orange', 'Mango'];
mixedFruits.sort((a,b)=>{
    return a.toLowerCase().localeCompare(b.toLowerCase())
})
console.log(mixedFruits)

//in an array of objects
const people = [
    { name: 'John', age: 25 },
    { name: 'Anna', age: 22 },
    { name: 'Zoe', age: 30 }
];
people.sort((a,b)=>{
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
})
console.log(people);

//string to integer
let str="2344";
let num=parseInt(str,10);
console.log(num)

let hexStr = "1a";
let num2 = parseInt(hexStr, 16);  // Parse as hexadecimal
console.log(num2); 