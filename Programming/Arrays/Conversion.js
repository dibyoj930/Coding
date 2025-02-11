const arr = ['name', 'John', 'age', 30, 'city', 'New York'];
const convertobj=
   arr.reduce((acc,value,index,arr)=>{
        if(index%2==0){
           acc[value]=arr[index+1]
        }
        return acc;
    },{})

console.log(convertobj)