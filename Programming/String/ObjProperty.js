//group by property
const people = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Alice", age: 28 },
  ];
const groupByProperty=(arr,property)=>{
  return   arr.reduce((group,obj)=>({
    
        ...group,[obj[property]]:[...(group[obj[property]]||[]),obj]
    }),{})
}
console.log(groupByProperty(people,"name"))