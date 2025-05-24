//implementing a groupby property for an object ->
function Groupby(arr,key){
  return arr.reduce((acc,obj)=>{
    let groupkey =  obj[key];
    if(!acc[groupkey]){
        acc[groupkey]=[];
    }
    acc[groupkey].push(obj.name);
    return acc;
  },{})
}
const arr=[{ id: 1, name: "Shubham", departmentId: 101 }, { id: 2, name: "Krutika", departmentId: 101 }, { id: 3, name: "Sakshi", departmentId: 102 }]
console.log(Groupby(arr,'departmentId'))

