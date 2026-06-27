const str='Dibyojyoti';
console.log(str.split('').reverse().join(''))
console.log([...new Set(str)].join(''))
//isolate the date object
const date=new Date();
console.log(date.toISOString().split("T")[0])