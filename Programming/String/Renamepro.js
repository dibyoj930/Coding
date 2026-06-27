
const renamepro=(obj,old,newp)=>{
    if(obj.hasOwnProperty(old)){
        obj[newp]=obj[old];
        delete obj[old]
    }
    Object.keys(obj).forEach((key)=>{
        if(typeof obj[key]=='object'&&obj[key]!==null){
            renamepro(obj[key],old,newp)
        }
    })
    return obj
}


const nestedObjects = {
    user: {
      firstName: "John",
      lastName: "Doe",
      details: {
        firstName: "Johnny",
      },
    },
  };
  const updatedPerson = renamepro(nestedObjects, "firstName", "OldFirstName");
  console.log(updatedPerson);