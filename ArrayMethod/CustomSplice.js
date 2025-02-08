//implementation of splice function custom
Array.prototype.customSplice=function(start,deletecount,...items){
    //store the array to a copy array  
    const arrcopy=[...this];
      const deleteitems=[];
    //make sure if the start is -ve it is handled correctly
      if(start<0){
        start=Math.max(arrcopy.length+start,0)
      }
    //deletedcount should not exit the array length
      deletecount=Math.min(deletecount,arrcopy.length-start);
    //delete the required elements with start+i and store them in a deletedarr
      for(let i=0;i<deletecount;i++){
        let index = start+i;
        let item = arrcopy[index];
        deleteitems.push(item);
        arrcopy[index]=undefined
      }
    //create a new array store the arrcopy into a new array
     const newarr=[];
     for(let i=0;i<arrcopy.length;i++){
        if(arrcopy[i]!==undefined){
           newarr.push(arrcopy[i])
        }
     }
    //now store the new items in the array
    for(let i=0;i<items.length;i++){
        newarr.splice(start+i,0,items[i])
    }
    //now update the final array and return the deleted values
    this.length=newarr.length;
    for(let i=0;i<newarr.length;i++){
        this[i]=newarr[i]
    }
    return deleteitems
}

const fruits = ["apple", "banana", "cherry", "date"];
const deleted = fruits.customSplice(2, 1, "grape");
console.log(fruits); // Output: ["apple", "banana", "grape", "date"]
console.log(deleted); // Output: ["cherry"]